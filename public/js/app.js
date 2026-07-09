const MAX_SLOTS = 6;
const slots = new Array(MAX_SLOTS).fill(null);
const slotCharges = new Array(MAX_SLOTS).fill(0);
let setStats = {};

const wrapper = document.querySelector(".wrapper");

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
const resultsBodyEl = document.getElementById("resultsBody");
const noticeEl = document.getElementById("notice");
const itemTooltipEl = document.getElementById("itemTooltip");
const calculateBtn = document.getElementById("calculate");
const clearBtn = document.getElementById("clear");

function showNotice(message) {
  noticeEl.textContent = message;
  noticeEl.hidden = false;
}

function clearNotice() {
  noticeEl.hidden = true;
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
  slotCharges[index] = 0;
  renderSlots();
  renderGallery();
}

function clearSet() {
  clearNotice();
  slots.fill(null);
  slotCharges.fill(0);
  resultsEl.hidden = true;
  renderSlots();
  renderGallery();
}

async function calculate() {
  clearNotice();
  const chosen = slots.filter(Boolean);
  if (chosen.length === 0) return;

  const objects = slots
    .map((item, i) => (item ? { item, charge: slotCharges[i] } : null))
    .filter(Boolean)
    .map(({ item, charge }) => {
      const stats = statsToTypeArray(item.stats);
      //! Add the dynamic stack attributes as an extra stat entry for stackable items

      if (item.stack && charge > 0) {

        stack_stats = Object.entries(item.stack.stats);

        stack_stats.forEach(([name, value]) => {
          stats.push(toStatEntry(name, charge * value));
        })
      }

      return {
        gold: item.gold,
        type: ITEM_TYPES[item.category],
        title: item.title,
        banned_set: bannedSetToTypeArray(item.bannedSet),
        stats,
        passives: passivesToJson(item.passives),
      };
    });

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

  //!  Asign the result to setStats
  setStats = data;

  renderResults(data);
}

async function testAbility(){

//? TESTING THE ABILITY FEATURE CALC

  const { Gold, ...build } = setStats;

  const test = {
    ability: {
        type: ability.type,
        base: ability.base,
        scaling: ability.scaling,
    },
    dummy: {
      HP: toStatEntry("HP", dummy.HP),
      R: toStatEntry("MR", dummy.R),
      reduction: dummy.reduction
    },
    build: build
  }

  const res = await fetch("/api/ability", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify( test ),
  });

  const data = await res.json();

  if (!res.ok) {
    showNotice(data.error || "Something went wrong calculating this set.");
    return;
  }

}

const main = async () => {

  calculateBtn.addEventListener("click", calculate);
  clearBtn.addEventListener("click", clearSet);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      calculate();
    }
  })

  wrapper.addEventListener("click", () => {
    window.open(wrapper.dataset.url, '_blank');
  })

  renderSlots();
  renderGallery();

}

main();
