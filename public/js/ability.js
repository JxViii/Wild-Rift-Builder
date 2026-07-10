const calculatorWrapperEl = document.querySelector(".calculator__wrapper");

const abilityTypeEl = document.getElementById("abilityType");
const abilityBaseEl = document.getElementById("abilityBase");
const abilityScalingEl = document.getElementById("abilityScaling");
const abilityPenEl = document.getElementById("abilityPen");
const abilityDmgTypeLabelEl = document.getElementById("abilityDmgTypeLabel");
const abilityScalingTypeLabelEl = document.getElementById("abilityScalingTypeLabel");

const dummyHpEl = document.getElementById("dummyHp");
const dummyResistanceEl = document.getElementById("dummyResistance");
const dummyResistanceLabelEl = document.getElementById("dummyResistanceLabel");
const dummyReductionEl = document.getElementById("dummyReduction");
const dummyReductionLabelEl = document.getElementById("dummyReductionLabel");

function clampSkillInput(el) {
  let value = Number(el.value);
  const min = Number(el.min);
  const max = Number(el.max);

  if (value > max) value = max;
  else if (value < min || Number.isNaN(value)) value = min;

  el.value = value;
}

[abilityBaseEl, abilityScalingEl, dummyHpEl, dummyResistanceEl, dummyReductionEl].forEach((el) => {
  el.addEventListener("input", () => clampSkillInput(el));
});

function getAbilityInput() {
  return {
    type: STAT_TYPES[abilityTypeEl.value],
    base: Number(abilityBaseEl.value),
    scaling: Number(abilityScalingEl.value),
    // penetration_percentage: Number(abilityPenEl.value) || 0,
  };
}

function getDummyInput() {
  return {
    hp: Number(dummyHpEl.value),
    resistance: Number(dummyResistanceEl.value),
    reduction: Number(dummyReductionEl.value) || 0,
  };
}

// Drives --type (AP/AD) and --resistance (MR/AR) so the calculator's
// colors follow whichever damage type is selected.
function updateAbilityTypeUI() {
  const isAD = abilityTypeEl.value === "AD";

  calculatorWrapperEl.classList.toggle("AP", !isAD);
  calculatorWrapperEl.classList.toggle("AD", isAD);
  calculatorWrapperEl.classList.toggle("MR", !isAD);
  calculatorWrapperEl.classList.toggle("AR", isAD);

  abilityDmgTypeLabelEl.textContent = isAD ? "physical damage" : "magic damage";
  abilityScalingTypeLabelEl.textContent = isAD ? "AD" : "AP";
  dummyResistanceLabelEl.textContent = isAD ? "Armor" : "Magic Resistance";
  dummyReductionLabelEl.textContent = isAD ? "Armor" : "Magic Resistance";
}