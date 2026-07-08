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

      //! Stackable case
      if (item.stack) {
        const label = document.createElement("input");
        label.value = slotCharges[i];
        label.type = "number";
        label.min = item.stack.min;
        label.max = item.stack.max;
        label.addEventListener("click", (e) => {
          e.stopPropagation();
          e.preventDefault();
        })

        //! Checkeo previo
        let value = Number(label.value);
        let min = Number(label.min);
        let max = Number(label.max);

        if (item.stack.img && item.stack.title) {


          if (value === max) {
            img.src = item.stack.img;
            img.alt = item.stack.title;
            slot.title = `${item.stack.title} (click to remove)`;
          } else {
            img.src = item.image;
          }
        }

        label.addEventListener("input", (e) => {

          let value = Number(label.value);
          let min = Number(label.min);
          let max = Number(label.max);

          if (value > max) {
            value = max;
          }
          else if (value < min || Number.isNaN(value)) value = min;

          if (item.stack.img && item.stack.title) {

            if (value === max) {
              img.src = item.stack.img;
              img.alt = item.stack.title;
              slot.title = `${item.stack.title} (click to remove)`;
            } else {
              img.src = item.image;
            }
          }

          label.value = value;
          slotCharges[i] = value;
        })
        slot.appendChild(label);
      }
    }
    slotsEl.appendChild(slot);
  });
}

function sortByName(a, b) {

  if (a["title"] < b["title"]) return -1;

  return 1;

}

function renderGallery() {
  hideItemTooltip();
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

      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.title;
      card.appendChild(img);

      if (!inSet) {
        card.addEventListener("click", () => addItem(item));
      }
      card.addEventListener("mouseenter", () => showItemTooltip(item));
      card.addEventListener("mousemove", (e) => moveItemTooltip(e));
      card.addEventListener("mouseleave", hideItemTooltip);
      grid.appendChild(card);
    });

    section.appendChild(grid);
    galleryEl.appendChild(section);
  });
}

function showItemTooltip(item) {
  itemTooltipEl.innerHTML = "";

  const title = document.createElement("p");
  title.className = "item-tooltip__title";
  title.textContent = item.title;
  itemTooltipEl.appendChild(title);

  const statEntries = Object.entries(item.stats || {});
  if (statEntries.length > 0) {
    const stats = document.createElement("div");
    stats.className = "item-tooltip__stats";
    statEntries.forEach(([name, value]) => {
      const stat = document.createElement("span");
      stat.className = "item-tooltip__stat";
      const readableValue = value !== null && typeof value === "object" ? value.value : value;
      stat.innerHTML = `${name}: <val>${readableValue}</val>`;
      stats.appendChild(stat);
    });
    itemTooltipEl.appendChild(stats);
  }

  (item.passives || []).forEach((passive) => {
    const entry = document.createElement("p");
    entry.className = "item-tooltip__passive";
    entry.innerHTML = `<b>${passive.title}:</b> ${passive.desc}`;
    itemTooltipEl.appendChild(entry);
  });

  itemTooltipEl.hidden = false;
}

function moveItemTooltip(e) {
  const offset = 16;
  let left = e.clientX + offset;
  let top = e.clientY + offset;

  const rect = itemTooltipEl.getBoundingClientRect();
  if (left + rect.width > window.innerWidth) {
    left = e.clientX - rect.width - offset;
  }
  if (top + rect.height > window.innerHeight) {
    top = e.clientY - rect.height - offset;
  }

  itemTooltipEl.style.left = `${Math.max(0, left)}px`;
  itemTooltipEl.style.top = `${Math.max(0, top)}px`;
}

function hideItemTooltip() {
  itemTooltipEl.hidden = true;
}

function renderResults(data) {
  resultsBodyEl.innerHTML = "";
  resultsEl.hidden = false;

  const statsList = document.createElement("div");
  statsList.className = "results__stats";
  for (const [key, value] of Object.entries(data)) {
    const row = document.createElement("span");
    row.className = "results__stat";
    row.innerHTML = `${key}: <val>${value}</val>`;
    statsList.appendChild(row);
  }
  resultsBodyEl.appendChild(statsList);

  const passives = slots
    .map((item, i) => (item ? { item, charge: slotCharges[i] } : null))
    .filter(Boolean)
    .flatMap(({ item, charge }) => {

      let result = [...(item.passives || [])];

      if (item.stack) {

        let max = Number(item.stack.max);

        if (charge === max) {

          if (item.stack.passives)
            result.push(...item.stack.passives);

          if (item.stack.delete) {
            result = result.filter(p => p.title !== item.stack.delete);
          }
        }

      }

      return result;

    })


  if (passives.length > 0) {
    const passivesList = document.createElement("div");
    passivesList.className = "results__passives";
    passives.forEach((p) => {
      const entry = document.createElement("p");
      entry.innerHTML = `<val><b>${p.title}:</b></val> ${p.desc}`;
      passivesList.appendChild(entry);
    });
    resultsBodyEl.appendChild(passivesList);
  }
}

function hideResults() {
  resultsEl.hidden = true;
}
