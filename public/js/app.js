const MAX_SLOTS = 6;
const slots = new Array(MAX_SLOTS).fill(null);

const CATEGORY_ORDER = ["PHYSICAL", "MAGIC", "DEFENSE", "SUPPORT", "BOOTS", "ACTIVE"];
const CATEGORY_LABELS = {
  PHYSICAL: "Physical",
  MAGIC: "Magic",
  DEFENSE: "Defense",
  SUPPORT: "Support",
  BOOTS: "Boots",
  ACTIVE: "Active",
};

const slotsEl = document.getElementById("slots");
const galleryEl = document.getElementById("gallery");
const resultsEl = document.getElementById("results");
const noticeEl = document.getElementById("notice");
const calculateBtn = document.getElementById("calculate");
const clearBtn = document.getElementById("clear");

function showNotice(message) {
  noticeEl.textContent = message;
  noticeEl.hidden = false;
}

function clearNotice() {
  noticeEl.hidden = true;
}

function renderSlots() {
  slotsEl.innerHTML = "";
  slots.forEach((item, i) => {
    const slot = document.createElement("div");
    slot.className = "slot" + (item ? " slot--filled" : "");
    if (item) {
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.title;
      slot.appendChild(img);
      slot.title = `${item.title} (click to remove)`;
      slot.addEventListener("click", () => removeItem(i));
    }
    slotsEl.appendChild(slot);
  });
}

function sortByName(a, b){

  if(a["title"] < b["title"]) return -1;

  return 1;

}

function renderGallery() {
  galleryEl.innerHTML = "";

  let SORTED_ITEMS = ITEMS.sort(sortByName);

  CATEGORY_ORDER.forEach((category) => {
    const items = SORTED_ITEMS.filter((item) => item.category === category);
    if (items.length === 0) return;

    const section = document.createElement("section");
    section.className = "gallery__section";

    const heading = document.createElement("h3");
    heading.className = "gallery__heading";
    heading.textContent = CATEGORY_LABELS[category];
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "gallery__grid";

    items.forEach((item) => {
      const inSet = slots.includes(item);
      const card = document.createElement("div");
      card.className = "item-card" + (inSet ? " item-card--disabled" : "");
      card.title = item.title;

      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.title;
      card.appendChild(img);

      if (!inSet) {
        card.addEventListener("click", () => addItem(item));
      }
      grid.appendChild(card);
    });

    section.appendChild(grid);
    galleryEl.appendChild(section);
  });
}

function addItem(item) {
  clearNotice();

  if (item.category === "ACTIVE" && slots.some((s) => s && s.category === "ACTIVE")) {
    showNotice("You can only have ONE active item at a time!");
    return;
  }

  if (item.category === "BOOTS" && slots.some((s) => s && s.category === "BOOTS")) {
    showNotice("You can only have ONE boots item at a time!");
    return;
  }

  const conflictTag = (item.bannedSet || []).find((tag) =>
    slots.some((s) => s && s !== item && (s.bannedSet || []).includes(tag))
  );
  if (conflictTag) {
    showNotice(`You can only have ONE item with the "${conflictTag}" tag at a time!`);
    return;
  }

  const emptyIndex = slots.indexOf(null);
  if (emptyIndex === -1) {
    showNotice("Set is full — remove an item first.");
    return;
  }

  slots[emptyIndex] = item;
  renderSlots();
  renderGallery();
}

function removeItem(index) {
  clearNotice();
  slots[index] = null;
  renderSlots();
  renderGallery();
}

function renderResults(data) {
  resultsEl.innerHTML = "";
  resultsEl.hidden = false;

  const statsList = document.createElement("div");
  statsList.className = "results__stats";
  for (const [key, value] of Object.entries(data)) {
    const row = document.createElement("span");
    row.className = "results__stat";
    row.textContent = `${key}: ${value}`;
    statsList.appendChild(row);
  }
  resultsEl.appendChild(statsList);

  const passives = slots.filter(Boolean).flatMap((item) => item.passives || []);
  if (passives.length > 0) {
    const passivesList = document.createElement("div");
    passivesList.className = "results__passives";
    passives.forEach((p) => {
      const entry = document.createElement("p");
      entry.innerHTML = `<b>${p.title}:</b> ${p.desc}`;
      passivesList.appendChild(entry);
    });
    resultsEl.appendChild(passivesList);
  }
}

async function calculate() {
  clearNotice();
  const chosen = slots.filter(Boolean);
  if (chosen.length === 0) return;

  const objects = chosen.map((item) => ({
    gold: item.gold,
    type: ITEM_TYPES[item.category],
    title: item.title,
    banned_set: bannedSetToTypeArray(item.bannedSet),
    stats: statsToTypeArray(item.stats),
    passives: passivesToJson(item.passives),
  }));

  const res = await fetch("/api/attributes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ objects }),
  });

  const data = await res.json();

  if (!res.ok) {
    showNotice(data.error || "Something went wrong calculating this set.");
    return;
  }

  renderResults(data);
}

function clearSet() {
  clearNotice();
  slots.fill(null);
  resultsEl.hidden = true;
  renderSlots();
  renderGallery();
}

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", clearSet);

renderSlots();
renderGallery();
