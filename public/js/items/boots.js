// Boots items — part of the ITEMS catalog (see items.js).
const BOOTS_ITEMS = [
  // NOTE: MERCS
  {
    title: "(Mercs1) Mercury's Treads",
    category: "BOOTS",
    gold: 1200,
    image: "img/Mercury's_Treads_item_HD.png",
    stats: { MR: 25, SPEED: 45, HP: 150, TENACITY: 15 },
    passives: [],
  },
  // NOTE: TABIS TIER 3
  {
    title: "(Tabi2) Armored Advance",
    category: "BOOTS",
    gold: 2200,
    image: "img/Armored_Advance_item_HD.png",
    stats: { ARMOR: 35, SPEED: 50, HP: 150 },
    passives: [
      { title: "Block", desc: "Basic attacks from champions deal 10% reduced damage to you." },
      { title: "Noxian Endurance", desc: "aking physical damage from champions grants a physical shield equal to 20 - 140 (based on level) + 5% of your max Health. (12-second cooldown)" },
    ],
  },
  // NOTE: ATK SPEED
  {
    title: "(ATK Speed1) Berserker's Greaves",
    category: "BOOTS",
    gold: 1200,
    image: "img/Berserker's_Greaves_item_HD.png",
    stats: { ATTACK_SPEED: 30, SPEED: 45 },
  },
  // NOTE: MERCS TIER 3
  {
    title: "(Mercs2) Chainlaced Crushers",
    category: "BOOTS",
    gold: 2200,
    image: "img/Chainlaced_Crushers_item_HD.png",
    stats: { MR: 35, SPEED: 50, TENACITY: 30, HP: 150 },
    passives: [
      { title: "Noxian Persistence", desc: "Taking magic damage from champions grants a magic shield equal to 20 - 140 (based on level) + 5% of your max Health (12-second cooldown)." },
    ],
  },
  // NOTE: CDR TIER 3
  {
    title: "(Ionia2) Crimson Lucidity",
    category: "BOOTS",
    gold: 2000,
    image: "img/Crimson_Lucidity_item_HD.png",
    stats: { CD: 25, SPEED: 50, MANA_REGEN: 75 },
    passives: [
      { title: "Summoned", desc: "Grants 20 Summoner Spell Haste." },
      { title: "Noxian Haste", desc: "After damaging an enemy champion with an ability, shielding or healing an allied champion, or casting a Summoner Spell, gain 10% (melee) / 8% (ranged) Movement Speed for 4 seconds. The same ability can only trigger this once every 4 seconds." },
    ],
  },
  // NOTE: OMNIVAMP
  {
    title: "(Omnivamp1) Gluttonous Greaves",
    category: "BOOTS",
    gold: 1000,
    image: "img/Gluttonous_Greaves_WR_item.webp",
    stats: { SPEED: 45 },
    passives: [
      { title: "Balanced of Power", desc: "Gain 12 Attack Damage or 20 Ability Power.", stats: { ADAPTATIVE: { value: 20, ratio: 0.6 } } },
      { title: "Convertion", desc: "Gain 5% Omnivamp + 0.5% Omnivamp for each takedown participation, up to an additional 5% and a maximum of 10% Omnivamp." },
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
      { title: "Blessed blade", desc: "Basic attacks restore 12 Health on hit." },
      { title: "Noxian Gait", desc: "When your basic attacks hit champions, gain 15% (melee) / 10% (ranged) burst Movement Speed for 2 seconds."}
    ],
  },
  //  NOTE: OMNIVAMP TIER 3
  {
    title: "(Omnivamp2) Immortal Path",
    category: "BOOTS",
    gold: 2000,
    image: "img/Immortal_Path_item_HD.png",
    stats: { SPEED: 50, OMNIVAMP: 10, AD: 25 },
    passives: [
      { title: "Balanced of Power", desc: "Gain 12 Attack Damage or 20 Ability Power.", stats: { ADAPTATIVE: { value: 20, ratio: 0.6 } }},
      { title: "Convertion", desc: "Gain 5% Omnivamp + 0.5% Omnivamp for each takedown participation, up to an additional 5% and a maximum of 10% Omnivamp." },
      { title: "Now and Forever", desc: "While above 50% Health, deal 50% bonus damage. While below 50% Health, gain 12% increased Healing and Shielding." },
    ],
  },
  // NOTE: CDR
  {
    title: "(Ionia1) Ionian Boots of Lucidity",
    category: "BOOTS",
    gold: 1000,
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
    stats: { SPEED: 45, ARMOR: 25},
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
    stats: { SPEED: 50, ARMOR_PEN_PERCENTAGE: 6, AD: 25, ARMOR_PEN: 12 },
    passives: [
      { title: "Cloudwalker", desc: "Gain 20 out-of-combat Movement Speed."}
    ],
  },
  // NOTE: AP TIER 3
  {
    title: "(AP2) Spellslinger's Shoes",
    category: "BOOTS",
    gold: 2200,
    image: "img/Spellslinger's_Shoes_item.webp",
    stats: { SPEED: 50, AP: 40, MANA_REGEN: 100, MP: 18, MP_PERCENTAGE: 8 },
    passives: [
      { title: "Big Bully", desc: "Basic attacks and active abilities deal an additional 22 true damage to minions." },
    ],
  },
];
