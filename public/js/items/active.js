// Active items — part of the ITEMS catalog (see items.js).
const ACTIVE_ITEMS = [
  {
    title: "Galeforce",
    category: "ACTIVE",
    gold: 3100,
    image: "img/Galeforce_item_HD.png",
    stats: { AD: 60, CRIT: 25, SPEED_PERCENTAGE: 4 },
    passives: [
      { title: "Cloudburst", desc: "Active: Dash in the target direction and fire 3 projectiles at the lowest-Health enemy near the destination, dealing a total of 40-125 (based on level) + 35% bonus Attack Damage physical damage. (60s cooldown)" },
    ],
  },
  // NOTE: Wild Rift calls this item "Stoneplate Enchant" (a boots enchantment), not "Gargoyle Stoneplate" like on PC — kept this title to match the downloaded icon name.
  {
    title: "Gargoyle Stoneplate",
    category: "ACTIVE",
    gold: 2900,
    image: "img/Gargoyle_Stoneplate_item_HD.png",
    stats: { ARMOR: 45, MR: 45, HP: 200, CD: 10 },
    passives: [
      { title: "Stoneplate", desc: "Active: Gain a shield equal to 100 + 90% bonus Health that rapidly decays over 2.5s. (60s cooldown)" },
    ],
  },
  {
    // NOTE: the 7.3 notes list this item under its passive's name, "Salvation".
    title: "Redemption",
    category: "ACTIVE",
    gold: 2450,
    image: "img/Redemption_item.webp",
    stats: { AP: 40, HEAL: 8, MANA_REGEN: 50, CD: 10 },
    passives: [
      { title: "Salvation", desc: "Active: Select a large area. After 2.5s, call down a beam of light that heals allied champions for 150-350 Health (scaling with ally level) and burns enemy champions for true damage equal to 10% of their max Health. It can be casted while dead. (60s cooldown)" },
    ],
  },
  // NOTE: gold/stats sourced from PC League of Legends data — search results for the Wild Rift version were inconsistent/unreliable; verify before relying on it.
  {
    title: "Stridebreaker",
    category: "ACTIVE",
    gold: 3100,
    image: "img/Stridebreaker.webp",
    stats: { AD: 40, HP: 400, ATTACK_SPEED: 25 },
    passives: [
      { title: "Breaking Shockwave", desc: "Active: Dash a short distance forward and deal physical damage equal to 100% Attack Damage to nearby enemies. Enemies hit are slowed by 40% for 3s. (25s cooldown" },
      { title: "Stride", desc: "Dealing physical damage grants 20 Movement Speed for 2s"}
    ],
  },
  {
    title: "Goredrinker",
    category: "ACTIVE",
    gold: 3100,
    image: "img/Goredrinker_item_HD.png",
    stats: { AD: 40, HP: 350, CD: 15, OMNIVAMP: 8 },
    passives: [
      { title: "Thirsting Slash", desc: "Active: Deal physical damage equal to 175% Attack Damage to nearby enemies. Restore Health equal to 20% Attack Damage + 10% missing Health for each enemy hit. (12s cooldown)" },
    ],
  },
  // NOTE: gold/stats sourced from PC League of Legends data — could not confirm exact Wild Rift numbers; verify before relying on it.
  {
    title: "Hextech Rocketbelt",
    category: "ACTIVE",
    gold: 2700,
    image: "img/Hextech_Rocketbelt_item_HD.png",
    stats: { AP: 70, HP: 250, CD: 20 },
    passives: [
      { title: "Rocket Salvo", desc: "Active: Dash a short distance in the target direction, unleashing an arc of rockets that deal 100 + 10% AP magic damage to enemies hit, if a champion or monster is hit by more than one rocket, additional rockets deal only 10% damage (30s cooldown)." },
    ],
  },
  {
    title: "Locket of the Iron Solari",
    category: "ACTIVE",
    gold: 2500,
    image: "img/Locket_of_the_Iron_Solari_item_HD.png",
    stats: { HP: 300, ARMOR: 30, MR: 30, CD: 10 },
    passives: [
      { title: "Locket", desc: "Active: Grant yourself and nearby allies a shield that absorbs 250-370 damage for 2.5s. If that target has received this effect within the last 20s, the shield value is halved.(60s cooldown)" },
    ],
  },
  {
    title: "Quicksilver Sash",
    category: "ACTIVE",
    gold: 1100,
    image: "img/Quicksilver_Sash_item_HD.png",
    stats: { MR: 30 },
    passives: [
      { title: "Quicksilver", desc: "Active: Remove all crowd control effects from your champion and become immune to all crowd control for 0.25s. Afterwards, gain 30% Tenacity and 30% slow resist for 1.5s. (60s cooldown)" },
    ],
  },
  {
    title: "Mercurial Scimitar",
    category: "ACTIVE",
    gold: 3100,
    image: "img/Mercurial_Scimitar_item_HD.png",
    stats: { AD: 45, MR: 40, LIFESTEAL: 12 },
    passives: [
      { title: "Quicksilver", desc: "Active: Remove all crowd control effects from your champion and become immune to all crowd control for 0.25s. Afterwards, gain 30% Tenacity and 30% slow resist for 1.5s. (60s cooldown)" },
    ],
  },
  {
    title: "Mikael's Blessing",
    category: "ACTIVE",
    gold: 2500,
    image: "img/Mikael's_Blessing_item_HD.png",
    stats: { HP: 300, MANA_REGEN: 50, HEAL: 9, CD: 15 },
    passives: [
      { title: "Cleanse", desc: "Active: Remove all crowd control effects from the target champion and make them immune to all crowd control except suppression and airborne effects for 0.2s. Also heals the target for 150-250 Health. (75s cooldown)" },
    ],
  },
  // NOTE: gold cost uncertain for the Wild Rift version — value below is carried over from PC LoL's Shurelya's Battlesong recipe cost, verify in-game.
  {
    title: "Shurelya's Battlesong",
    category: "ACTIVE",
    gold: 2450,
    image: "img/Shurelya's_Battlesong_item_Unused_HD.png",
    stats: { AP: 35, CD: 20, MANA_REGEN: 50, SPEED_PERCENTAGE: 4 },
    passives: [
      { title: "Inspiring Speech", desc: "Active: Grant nearby allies 30% Movement Speed for 4s. (60s cooldown)" },
    ],
  },
  {
    title: "Seeker's Armguard",
    category: "ACTIVE",
    gold: 1400,
    image: "img/Seeker's_Armguard_item.webp",
    stats: { AP: 35, ARMOR: 20 },
    passives: [
      { title: "Stasis", desc: "Active: Become invulnerable and untargetable for 2.5 seconds, but unable to act (120s cooldown)." },
    ],
  },
  {
    title: "Zhonya's Hourglass",
    category: "ACTIVE",
    gold: 3300,
    image: "img/Zhonya's_Hourglass_item_HD.webp",
    stats: { AP: 110, ARMOR: 40 },
    passives: [
      { title: "Stasis", desc: "Active: Become invulnerable and untargetable for 2.5 seconds, but unable to act (90s cooldown)." },
    ],
  },
];
