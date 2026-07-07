// Boots items — part of the ITEMS catalog (see items.js).
const BOOTS_ITEMS = [
  // NOTE: MERCS
  {
    title: "(Mercs1) Mercury's Treads",
    category: "BOOTS",
    gold: 1200,
    image: "img/Mercury's_Treads_item_HD.png",
    stats: { MR: 25, SPEED: 45, HP: 150, HP_REGEN: 25, TENACITY: 15 },
    passives: [],
  },
  // NOTE: TABIS TIER 3
  {
    title: "(Tabi2) Armored Advance",
    category: "BOOTS",
    gold: 2200,
    image: "img/Armored_Advance_item_HD.png",
    stats: { ARMOR: 40, SPEED: 50, HP: 150, HP_REGEN: 50  },
    passives: [
      { title: "Plating", desc: "Reduces incoming damage from basic attacks by 12% (excludes turret attacks)." },
      { title: "Noxian Endurance", desc: "Taking physical damage from champions grants a shield that absorbs physical damage for 4 seconds (12 second cooldown)." },
    ],
  },
  // NOTE: ATK SPEED
  {
    title: "(ATK Speed1) Berserker's Greaves",
    category: "BOOTS",
    gold: 1200,
    image: "img/Berserker's_Greaves_item_HD.png",
    stats: { AD: 15, ATTACK_SPEED: 30, SPEED: 45 },
  },
  // NOTE: MERCS TIER 3
  {
    title: "(Mercs2) Chainlaced Crushers",
    category: "BOOTS",
    gold: 2200,
    image: "img/Chainlaced_Crushers_item_HD.png",
    stats: { MR: 35, SPEED: 50, HP_REGEN: 50, TENACITY: 30, HP: 150 },
    passives: [
      { title: "Noxian Endurance", desc: "Taking magical damage from champions grants a shield that absorbs magical damage for 4 seconds (12 second cooldown)." },
    ],
  },
  // NOTE: CDR TIER 3
  {
    title: "(Ionia2) Crimson Lucidity",
    category: "BOOTS",
    gold: 900,
    image: "img/Crimson_Lucidity_item_HD.png",
    stats: { CD: 20, SPEED: 50, MANA_REGEN: 50 },
    passives: [
      { title: "Ionian Insight", desc: "Grants 20 Summoner Spell Haste." },
      { title: "Noxian Haste", desc: "Healing, shielding, or buffing an ally, damaging enemy champions with abilities, or using a Summoner Spell grants bonus Move Speed for 4 seconds." },
    ],
  },
  // NOTE: OMNIVAMP
  {
    title: "(Omnivamp1) Gluttonous Greaves",
    category: "BOOTS",
    gold: 1200,
    image: "img/Gluttonous_Greaves_WR_item.webp",
    stats: { SPEED: 45, AD: 15 },
    passives: [
      { title: "Conversion", desc: "+8% Omnivamp." },
    ],
  },
  // NOTE: ATK SPEED TIER 3
  {
    title: "(ATK Speed2) Gunmetal Greaves",
    category: "BOOTS",
    gold: 2200,
    image: "img/Gunmetal_Greaves_item_HD.png",
    stats: { ATTACK_SPEED: 50, SPEED: 50, PHYSICAL_VAMP: 5 },
    passives: [
      { title: "Noxian Gait", desc: "Basic attacks against champions grant bonus 15% (melee)/ 10% (ranged) Move Speed decaying over 2 seconds." },
      { title: "Healing Edge", desc: "Heals 12 each autoattack"}
    ],
  },
  //  NOTE: OMNIVAMP TIER 3
  {
    title: "(Omnivamp2) Immortal Path",
    category: "BOOTS",
    gold: 2200,
    image: "img/Immortal_Path_item_HD.png",
    stats: { SPEED: 50, OMNIVAMP: 10, AD: 25 },
    passives: [
      { title: "Now and Forever", desc: "While above 50% health, deal increased damage. While below 50% health, gain increased healing, shielding, and health regen." },
    ],
  },
  // NOTE: CDR
  {
    title: "(Ionia1) Ionian Boots of Lucidity",
    category: "BOOTS",
    gold: 900,
    image: "img/Ionian_Boots_of_Lucidity_item_HD.png",
    stats: { SPEED: 50, CD: 25, MANA_REGEN: 75 },
    passives: [
      { title: "Summoned", desc: "Reduces summoner spell cooldowns by 20%." },
      { title: "Sprint", desc: "Active: increases movement speed for a few seconds, removed on taking or dealing damage to champions." },
    ],
  },
  // NOTE: TABIS
  { 
    title: "(Tabi1) Plated Steelcaps",
    category: "BOOTS",
    gold: 1200,
    image: "img/Plated_Steelcaps_item_HD.png",
    stats: { SPEED: 45, ARMOR: 25, HP_REGEN: 25 },
    passives: [
      { title: "Block", desc: "Reduces all damage from basic attacks by 6%." },
    ],
  },
  // NOTE: AP
  {
    title: "(AP1) Sorcerer's Shoes",
    category: "BOOTS",
    gold: 1200,
    image: "img/Sorcerer's_Shoes_item_HD.webp",
    stats: { SPEED: 45, AP: 25, MANA_REGEN: 75 },
    passives: [],
  },
  //  NOTE: LEThALITY
  {
    title: "(Lethality1) Boots of Dynamism",
    category: "BOOTS",
    gold: 1200,
    image: "img/Boots_of_Dynamism.png",
    stats: { SPEED: 45, ARMOR_PEN: 10, AD: 15 },
    passives: [],
  },
  //  NOTE: LEThALITY TIER 3
  {
    title: "(Lethality2) Armor Breaker",
    category: "BOOTS",
    gold: 2200,
    image: "img/Boots_of_Dynamism.png",
    stats: { SPEED: 50, ARMOR_PEN_PERCENTAGE: 6, AD: 40, ARMOR_PEN: 12 },
    passives: [],
  },
  // NOTE: AP TIER 3
  {
    title: "(AP2) Spellslinger's Shoes",
    category: "BOOTS",
    gold: 2200,
    image: "img/Spellslinger's_Shoes_item.webp",
    stats: { SPEED: 50, AP: 40, MANA_REGEN: 100, MP: 18, MP_PERCENTAGE: 8 },
    passives: [
      { title: "Noxus Endurance", desc: "autoattacks and active skills deal 22 extra true damage to minions" },
    ],
  },
];
