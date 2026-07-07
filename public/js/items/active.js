// Active items — part of the ITEMS catalog (see items.js).
const ACTIVE_ITEMS = [
  {
    title: "Galeforce",
    category: "ACTIVE",
    gold: 3100,
    image: "img/Galeforce_item_HD.png",
    stats: { AD: 50, CRIT: 25, ATTACK_SPEED: 15, SPEED_PERCENTAGE: 5 },
    passives: [
      { title: "Cloudburst", desc: "Unique Active: Dash in the target direction and fire 3 homing missiles at the lowest-health nearby enemy, prioritizing champions, dealing physical damage (60s cooldown)." },
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
      { title: "Fortify", desc: "Grants a shield that absorbs 30% of maximum Health, decaying over 4 seconds. If 3 or more enemies are nearby, the shield value increases by 100%. Damage dealt is reduced by 40% for 4 seconds (45s cooldown)." },
    ],
  },
  {
    title: "Redemption",
    category: "ACTIVE",
    gold: 2600,
    image: "img/Redemption_item.webp",
    stats: { AP: 50, HEAL: 5, MANA_REGEN: 50, HP: 150, CD: 15 },
    passives: [
      { title: "Redemption", desc: "Select a big area and after 2.5s it summons a lighting that heals allies and damages enemy champions" },
    ],
  },
  // NOTE: gold/stats sourced from PC League of Legends data — search results for the Wild Rift version were inconsistent/unreliable; verify before relying on it.
  {
    title: "Stridebreaker",
    category: "ACTIVE",
    gold: 3100,
    image: "img/Stridebreaker.webp",
    stats: { AD: 40, HP: 400, ATTACK_SPEED: 15 },
    passives: [
      { title: "Thirsting Slash", desc: "Unique Active: Deal physical damage to nearby enemies and heal for a percent of missing Health, increased for each enemy champion hit (15s cooldown)." },
    ],
  },
  {
    title: "Goredrinker",
    category: "ACTIVE",
    gold: 3100,
    image: "img/Goredrinker_item_HD.png",
    stats: { AD: 40, HP: 350, CD: 15, OMNIVAMP: 8 },
    passives: [
      { title: "Thirsting Slash", desc: "Unique Active: Deal physical damage to nearby enemies and heal for a percent of missing Health, increased for each enemy champion hit (15s cooldown)." },
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
      { title: "Rocket Salvo", desc: "Unique Active: Dash a short distance in the target direction, unleashing an arc of rockets that deal 100 + 10%AP magic damage to enemies hit, if a champion or monster is hit by more than one rocket, additional rockets deal only 10% damage (30s cooldown)." },
    ],
  },
  {
    title: "Locket of the Iron Solari",
    category: "ACTIVE",
    gold: 2600,
    image: "img/Locket_of_the_Iron_Solari_item_HD.png",
    stats: { HP: 200, ARMOR: 30, MR: 30, CD: 10 },
    passives: [
      { title: "Devotion", desc: "Active: shields you and nearby allies, decaying over a few seconds (60s cooldown)." },
    ],
  },
  {
    title: "Mercurial Scimitar",
    category: "ACTIVE",
    gold: 3100,
    image: "img/Mercurial_Scimitar_item_HD.png",
    stats: { AD: 45, MR: 40, OMNIVAMP: 10 },
    passives: [
      { title: "Quicksilver", desc: "Active: removes all crowd control effects from your champion." },
    ],
  },
  {
    title: "Mikael's Blessing",
    category: "ACTIVE",
    gold: 2500,
    image: "img/Mikael's_Blessing_item_HD.png",
    stats: { HP: 300, MANA_REGEN: 50, HEAL: 10, CD: 10 },
    passives: [
      { title: "Purify", desc: "Active: removes all crowd control debuffs from an ally champion and grants inmunity to all crowd control effects for 0.2 seconds. Also restores 150-250 health to the target. (90s cooldown)" },
    ],
  },
  // NOTE: Quicksilver Sash does not appear in the current Wild Rift item list (WR uses "Quicksilver Enchant" on boots instead) — stats below are PC LoL data, uncertain for WR.
  {
    title: "Quicksilver Sash",
    category: "ACTIVE",
    gold: 1300,
    image: "img/Quicksilver_Sash_item_HD.png",
    stats: { MR: 30 },
    passives: [
      { title: "Quicksilver", desc: "UNIQUE Active: Removes all crowd control debuffs (except Airborne) from your champion." },
    ],
  },
  // NOTE: gold cost uncertain for the Wild Rift version — value below is carried over from PC LoL's Shurelya's Battlesong recipe cost, verify in-game.
  {
    title: "Shurelya's Battlesong",
    category: "ACTIVE",
    gold: 2600,
    image: "img/Shurelya's_Battlesong_item_Unused_HD.png",
    stats: { AP: 50, CD: 20, MANA_REGEN: 50, SPEED_PERCENTAGE: 5 },
    passives: [
      { title: "Inspiring Speech", desc: "UNIQUE Active: You and nearby allies gain 30% bonus Move Speed for 4 seconds." },
    ],
  },
  {
    title: "Seeker's Armguard",
    category: "ACTIVE",
    gold: 1400,
    image: "img/Seeker's_Armguard_item.webp",
    stats: { AP: 35, ARMOR: 20 },
    passives: [
      { title: "Stasis", desc: "Unique Active: Become invulnerable and untargetable for 2.5 seconds, but unable to act (120s cooldown)." },
    ],
  },
  {
    title: "Zhonya's Hourglass",
    category: "ACTIVE",
    gold: 3300,
    image: "img/Zhonya's_Hourglass_item_HD.webp",
    stats: { AP: 110, ARMOR: 40 },
    passives: [
      { title: "Stasis", desc: "Unique Active: Become invulnerable and untargetable for 2.5 seconds, but unable to act (90s cooldown)." },
    ],
  },
];
