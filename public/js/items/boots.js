// Boots items — part of the ITEMS catalog (see items.js).
const BOOTS_ITEMS = [
  {
    title: "Mercury's Treads",
    category: "BOOTS",
    gold: 1100,
    image: "img/Mercury's_Treads_item_HD.png",
    stats: { MR: 25, SPEED: 45 },
    passives: [
      { title: "Tenacity", desc: "Reduces the duration of stuns, slows, taunts, and other disables." },
    ],
  },
  // NOTE: Armored Advance appears to be a Midlane Quest upgrade item from PC League of Legends, not confirmed to exist in Wild Rift; stats/gold uncertain, verify.
  {
    title: "Armored Advance",
    category: "BOOTS",
    gold: 1400,
    image: "img/Armored_Advance_item_HD.png",
    stats: { ARMOR: 40, SPEED: 50 },
    passives: [
      { title: "Plating", desc: "Reduces incoming damage from basic attacks by 12% (excludes turret attacks)." },
      { title: "Noxian Endurance", desc: "Taking physical damage from champions grants a shield that absorbs physical damage for 4 seconds (12 second cooldown)." },
    ],
  },
  {
    title: "Berserker's Greaves",
    category: "BOOTS",
    gold: 1400,
    image: "img/Berserker's_Greaves_item_HD.png",
    stats: { AD: 15, ATTACK_SPEED: 30, SPEED: 45 },
  },
  // NOTE: Chainlaced Crushers appears to be a Midlane Quest upgrade item from PC League of Legends, not confirmed to exist in Wild Rift; stats/gold uncertain, verify.
  {
    title: "Chainlaced Crushers",
    category: "BOOTS",
    gold: 1250,
    image: "img/Chainlaced_Crushers_item_HD.png",
    stats: { MR: 30, SPEED: 45 },
    passives: [
      { title: "Tenacious Guard", desc: "Grants 30% Tenacity. Taking magic damage from champions grants a shield that absorbs magic damage for 5 seconds (15 second cooldown)." },
    ],
  },
  // NOTE: Crimson Lucidity appears to be a Midlane Quest boots upgrade from PC League of Legends, not confirmed to exist in Wild Rift; stats/gold uncertain, verify.
  {
    title: "Crimson Lucidity",
    category: "BOOTS",
    gold: 900,
    image: "img/Crimson_Lucidity_item_HD.png",
    stats: { CD: 20, SPEED: 45 },
    passives: [
      { title: "Ionian Insight", desc: "Grants 20 Summoner Spell Haste." },
      { title: "Noxian Haste", desc: "Healing, shielding, or buffing an ally, damaging enemy champions with abilities, or using a Summoner Spell grants bonus Move Speed for 4 seconds." },
    ],
  },
  {
    title: "Gluttonous Greaves",
    category: "BOOTS",
    gold: 1400,
    image: "img/Gluttonous_Greaves_item_HD.png",
    stats: { SPEED: 45, OMNIVAMP: 7 },
    passives: [
      { title: "Conversion", desc: "+7% Omnivamp." },
    ],
  },
  // NOTE: could not confirm this item exists in Wild Rift under this name — gold/stats are the PC League of Legends version; verify before relying on it.
  {
    title: "Gunmetal Greaves",
    category: "BOOTS",
    gold: 1850,
    image: "img/Gunmetal_Greaves_item_HD.png",
    stats: { ATTACK_SPEED: 40, SPEED: 50 },
    passives: [
      { title: "Noxian Gait", desc: "Basic attacks against champions grant bonus Move Speed decaying over 2 seconds." },
    ],
  },
  {
    title: "Immortal Path",
    category: "BOOTS",
    gold: 950,
    image: "img/Immortal_Path_item_HD.png",
    stats: { SPEED: 45, OMNIVAMP: 4 },
    passives: [
      { title: "Slay", desc: "Gain 1% omnivamp for each takedown on enemy champions, up to 6% at 6 takedowns." },
      { title: "Now and Forever", desc: "While above 50% health, deal increased damage. While below 50% health, gain increased healing, shielding, and health regen." },
    ],
  },
  {
    title: "Ionian Boots of Lucidity",
    category: "BOOTS",
    gold: 900,
    image: "img/Ionian_Boots_of_Lucidity_item_HD.png",
    stats: { SPEED: 45, CD: 15 },
    passives: [
      { title: "Summoned", desc: "Reduces summoner spell cooldowns by 10%." },
      { title: "Sprint", desc: "Active: increases movement speed for a few seconds, removed on taking or dealing damage to champions." },
    ],
  },
  {
    title: "Plated Steelcaps",
    category: "BOOTS",
    gold: 1350,
    image: "img/Plated_Steelcaps_item_HD.png",
    stats: { SPEED: 45, ARMOR: 35 },
    passives: [
      { title: "Block", desc: "Reduces incoming physical damage from basic attacks by 15%." },
    ],
  },
  {
    title: "Sorcerer's Shoes",
    category: "BOOTS",
    gold: 1100,
    image: "img/Sorcerer's_Shoes_item_HD.webp",
    stats: { SPEED: 45, MP_PERCENTAGE: 18 },
    passives: [],
  },
];
