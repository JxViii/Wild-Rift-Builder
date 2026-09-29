// Support items — part of the ITEMS catalog (see items.js).
const SUPPORT_ITEMS = [
  {
    title: "Ardent Censer",
    category: "SUPPORT",
    gold: 2400,
    image: "img/Ardent_Censer_item_HD.png",
    stats: { AP: 50, MANA_REGEN: 50, HEAL: 8 },
    passives: [
      { title: "Ardent", desc: "Grants +4% Move Speed." , stats: { SPEED_PERCENTAGE: 4 }},
      { title: "Censer", desc: "Shielding or healing an allied champion other than yourself empowers both you and that champion for 6 seconds, granting 30% bonus Attack Speed and 25 bonus magic damage on basic attacks." },
    ],
  },
  {
    title: "Imperial Mandate",
    category: "SUPPORT",
    gold: 2600,
    image: "img/Imperial_Mandate_item_HD.png",
    stats: { AP: 60, MANA_REGEN: 50 },
    passives: [
      { title: "Control", desc: "Crowd Control abilities gain 20 Ability Haste." },
      { title: "Command", desc: "Crowd-controlling an enemy champion marks them for 4 seconds, causing them to take 7% increased damage during that time." },
    ],
  },
  {
    title: "Knight's Vow",
    category: "SUPPORT",
    gold: 2450,
    image: "img/Knight's_Vow_item_HD.png",
    stats: { ARMOR: 40, HP: 200, HP_REGEN: 100, CD: 10 },
    passives: [
      { title: "Pledge", desc: "When you buy or re-buy this item, designate an allied champion as Worthy." },
      { title: "Sacrifice", desc: "While your Worthy ally is nearby, redirect 12% of the damage they take to you, and heal for 10% of the damage dealt by them to champions" },
    ],
  },
  {
    title: "Radiant Virtue",
    category: "SUPPORT",
    gold: 2650,
    image: "img/Radiant_Virtue_item_HD.png",
    stats: { HP: 300, ARMOR: 30, MR: 30, CD: 10 },
    passives: [
      { title: "Guiding Light", desc: "Casting your ultimate Transcends you for 9 seconds, increasing max Health by 10% for 6s. While Trascended, you and allied champions within 1200 units of you heal for 2.5% of your MAX Health per second over the duration. If you're a ranged champion, heals are reduced by 50%." },
    ],
  },
  {
    title: "Staff of Flowing Water",
    category: "SUPPORT",
    gold: 2400,
    image: "img/Staff_of_Flowing_Water_item_Unused_HD.png",
    stats: { AP: 50, MANA_REGEN: 50, HEAL: 8, CD: 10 },
    passives: [
      { title: "Rapids", desc: "Shielding or healing an allied champion other than yourself empowers both you and that champion for 6 seconds, granting 40 Ability Power and 15 Ability Haste." },
    ],
  },
  {
    title: "Zeke's Convergence",
    category: "SUPPORT",
    gold: 2400,
    image: "img/Zeke's_Convergence_item_Unused_HD.png",
    stats: { HP: 300, ARMOR: 25, MR: 25, CD: 10 },
    passives: [
      { title: "Converge", desc: "Gain 10 Ultimate ability haste." },
      { title: "Frostfire Tempest", desc: "Casting your ultimate ability deals 150 magic damage and slows nearby enemies by 30% over 5 seconds. If no enemy champion is in range when the ultimate is cast, the effect is delayed until up to 5 seconds later or until an enemy champion enters range." },
    ],
  },
  {
    title: "Yordle Trap",
    category: "SUPPORT",
    gold: 2400,
    image: "img/Yordle_Trap.webp",
    stats: { HP: 200, ARMOR: 20, MR: 20, CD: 15 },
    passives: [
      {title: "Catcher", desc: "Slowing or immobilizing an enemy champion empowers you for 8 / 4 seconds (melee / ranged), granting 20 Movement Speed. During this time, you and nearby allies gain 30% / 20% bonus Attack Speed (melee / ranged). If an ally, including you, gets a kill while inspired, you gain 20 gold."},
    ],
  },
  {
    title: "Harmonic Echo",
    category: "SUPPORT",
    gold: 2500,
    image: "img/Harmonic_Echo.png",
    stats: { HP: 200, AP: 40, MANA_REGEN: 50, CD: 20 },
    passives: [
      {title: "Harmonic Echo", desc: "When you heal or shield an allied champion, the effect links to the nearest allied champion within range with the lowest percentage Health, excluding yourself, and grants them 30% of that heal or 35% of that shield. If no other allied champion is in range, the original target instead receives that same extra heal or shield."},
    ],
  },
  {
    title: "Echoes of Helia",
    category: "SUPPORT",
    gold: 2400,
    image: "img/Echoes_of_Helia.webp",
    stats: { HP: 200, AP: 40, CD: 20, MANA_REGEN: 50 },
    passives: [
      { title: "Soul Siphon", desc: "30% of pre-mitigation damage dealt to enemy champions is stored as Soul Fragments, with a maximum of 80 - 250 based on level. When you heal or shield an allied champion other than yourself, all Soul Fragments are consumed to heal that target for an equal amount." },
    ],
  },
  {
    title: "Whispering Circlet",
    category: "SUPPORT",
    gold: 2400,
    image: "img/Whispering_Circlet.webp",
    bannedSet: ["MANAFLOW"],
    stats: { HP: 200, MAX_MANA: 500, MANA_REGEN: 50, HEAL: 8 },
    passives: [
      { title: "Harmony", desc: "Gain bonus Heal and Shield Power equal to 0.25% of max Mana and refund 25% of Mana spent.", stats: { MANA_HEAL: 0.25 } },
      { title: "Mana Charge", desc: "Mana expenditure grants 14 max Mana, up to 700. This can trigger at most 2 times every 10 seconds. At max stacks, it automatically upgrades into Diadem of Songs." },
    ],
    stack: {
      stats: { MAX_MANA: 1 },
      min: "0",
      max: "700",
      title: "Diadem of Songs",
      img: "img/Diadem_of_Songs.png",
      passives: [{ title: "Diadem", desc: "If either you or an allied champion you healed or shielded within the last 3 seconds is in combat, heal the nearby allied champion with the lowest Health within 800 units each second for an amount equal to 0.8% of your max Mana." }],
      delete: "Mana Charge"
    }
  },
];
