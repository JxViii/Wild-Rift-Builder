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
const modeToggleEl = document.getElementById("modeToggle");
const itemsViewEl = document.getElementById("itemsView");
const calculatorViewEl = document.getElementById("calculatorView");
const calculateAbilityBtn = document.getElementById("calculateAbility");
const dmgFinalEl = document.getElementById("dmgFinal");
const dmgPreEl = document.getElementById("dmgPre");
const dmgPostEl = document.getElementById("dmgPost");
const dmgResistanceBeforeEl = document.getElementById("dmgResistanceBefore");
const dmgResistanceAfterEl = document.getElementById("dmgResistanceAfter");

function showNotice(message) {
  noticeEl.textContent = message;
  noticeEl.hidden = false;
}

function clearNotice() {
  noticeEl.hidden = true;
}

function setMode(mode) {
  itemsViewEl.hidden = mode !== "items";
  calculatorViewEl.hidden = mode !== "calculator";

  [...modeToggleEl.children].forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.mode === mode);
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

async function testAbility() {

  //? ABILITY DAMAGE CALCULATOR

  const { Gold, ...build } = setStats;

  const stats = Object.entries(build)
    .map(([name, value]) => {
      return toStatEntry(name, value);
    })

  const abilityInput = getAbilityInput();
  const dummyInput = getDummyInput();
  const resistanceName = abilityInput.type === STAT_TYPES.AD ? "ARMOR" : "MR";

  const test = {
    ability: {
      type: abilityInput.type,
      base: abilityInput.base,
      scaling: abilityInput.scaling,
    },
    dummy: {
      HP: toStatEntry("HP", dummyInput.hp),
      R: toStatEntry(resistanceName, dummyInput.resistance),
      reduction: dummyInput.reduction
    },
    build: stats
  }

  const res = await fetch("/api/ability", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(test),
  });

  const data = await res.json();

  if (!res.ok) {
    showNotice(data.error || "Something went wrong calculating this set.");
    return;
  }

  dmgPreEl.textContent = data.PRE_MITIGATION_DAMAGE.toFixed(0);
  dmgPostEl.textContent = data.POST_MITIGATION_DAMAGE.toFixed(0);
  dmgResistanceBeforeEl.textContent = data.RESISTANCE_BEFORE_PEN.toFixed(0);
  dmgResistanceAfterEl.textContent = data.RESISTANCE_AFTER_PEN.toFixed(0);
  dmgFinalEl.textContent = data.POST_MITIGATION_DAMAGE.toFixed(0);
}

async function testAbilityTesting(abilityX, MR) {

  const { Gold, ...build } = setStats;

  const stats = Object.entries(build)
    .map(([name, value]) => {
      return toStatEntry(name, value);
    })

  const abilityInput = getAbilityInput();
  const dummyInput = getDummyInput();
  const resistanceName = abilityInput.type === STAT_TYPES.AD ? "ARMOR" : "MR";

  const test = {
    ability: {
      type: abilityX.type,
      base: abilityX.base,
      scaling: abilityX.scaling,
    },
    dummy: {
      HP: toStatEntry("HP", dummyInput.hp),
      R: toStatEntry(resistanceName, MR),
      reduction: 0
    },
    build: stats
  }

  const res = await fetch("/api/ability", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(test),
  });

  const data = await res.json();

  if (!res.ok) {
    showNotice(data.error || "Something went wrong calculating this set.");
    return;
  }

  return data.POST_MITIGATION_DAMAGE;
}


const twisted_fate = async () => {

  console.log(" ");
  console.log(" ");
  console.log(" ");

  for(let MR=40; MR !== 150; MR+=10){

    const Q_dmg = await testAbilityTesting(Q, MR);
    const W_dmg = await testAbilityTesting(yellow, MR);
    const liche_dmg = await testAbilityTesting(liche, MR);
    const E_dmg = await testAbilityTesting(E, MR);
    const nashors_dmg = await testAbilityTesting(nashor, MR);

    const AA = AD_SCALE[13] * 0.5;

    const n_AA = AA + nashors_dmg;

    // console.log("W: ", W_dmg);
    // console.log("Liche: ", liche_dmg);
    // console.log("Q: ", Q_dmg);
    // console.log("E: ", E_dmg);
    // console.log("auto: ", AD_SCALE[15] * 0.5);

    // ! Intended combo: W(stun) E Q AA AA AA AA E

    const sum = W_dmg + liche_dmg + nashors_dmg + E_dmg + Q_dmg + n_AA + n_AA + n_AA + n_AA + E_dmg;

    console.log("Combo: ", sum, " MR: ", MR);  
  }

}

const main = async () => {

  calculateBtn.addEventListener("click", calculate);
  clearBtn.addEventListener("click", clearSet);
  calculateAbilityBtn.addEventListener("click", testAbility);
  abilityTypeEl.addEventListener("change", updateAbilityTypeUI);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      calculate();
    }
  })

  wrapper.addEventListener("click", () => {
    window.open(wrapper.dataset.url, '_blank');
  })

  modeToggleEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".mode-toggle__option");
    if (btn) setMode(btn.dataset.mode);
  });

  renderSlots();
  renderGallery();
  setMode("items");
  updateAbilityTypeUI();

  document.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key === 'a') {
      testAbility();
    }
  })

  //! TF TESTING

  document.addEventListener('keydown', (e) => {
    if (e.key === 't') {
      twisted_fate();
    }
  })


}

main();