// Support items — part of the ITEMS catalog (see items.js).
const SUPPORT_ITEMS = [
  {
    title: "Ardent Censer",
    category: "SUPPORT",
    gold: 2700,
    image: "img/Ardent_Censer_item_HD.png",
    stats: { AP: 45, HP: 250, CD: 10, MANA_REGEN: 50, HEAL: 5 },
    passives: [
      { title: "Ardent", desc: "Grants +5% Move Speed." , stats: { SPEED_PERCENTAGE: 5 }},
      { title: "Censer", desc: "Healing or shielding an allied champion (excluding yourself) they gain bonus Attack Speed 15% - 34% and their basic attacks deal bonus magic damage  16-22 for 6 seconds. This damage can critically strike" },
    ],
  },
  {
    title: "Imperial Mandate",
    category: "SUPPORT",
    gold: 2500,
    image: "img/Imperial_Mandate_item_HD.png",
    stats: { AP: 50, HP: 200, CD: 20 },
    passives: [
      { title: "Coordinated Fire", desc: "Abilities that slow or immobilize a champion deal 47 - 75 bonus magic damage and mark the target for 4s (6s cooldown per enemy champion). Ally damage detonates the mark for 94 - 150 bonus magic damage and granting 20% movement speed to both for 2s." },
    ],
  },
  {
    title: "Knight's Vow",
    category: "SUPPORT",
    gold: 2600,
    image: "img/Knight's_Vow_item_HD.png",
    stats: { ARMOR: 40, HP: 400, HP_REGEN: 100, CD: 10 },
    passives: [
      { title: "Pledge", desc: "When you buy or re-buy this item, designate an allied champion as Worthy." },
      { title: "Sacrifice", desc: "While your Worthy ally is nearby, redirect 12% of the damage they take to you, and heal for 10% of the damage dealt by them to champions" },
    ],
  },
  // NOTE: Radiant Virtue was an Arena-exclusive PC LoL item (removed from LoL entirely in May 2025) and does not appear to be a standard Wild Rift item — stats below are best-effort from its last known PC version.
  {
    title: "Radiant Virtue",
    category: "SUPPORT",
    gold: 2850,
    image: "img/Radiant_Virtue_item_HD.png",
    stats: { HP: 300, ARMOR: 45, CD: 15 },
    passives: [
      { title: "Guiding Light", desc: "Casting your ultimate Transcends you for 9 seconds, increasing max Health by 10% for 6s. While Trascended, you and allied champions within 1200 units of you heal for 2.5% of your MAX Health per second over the duration. If you're a ranged champion, heals are reduced by 50%." },
    ],
  },
  {
    title: "Staff of Flowing Water",
    category: "SUPPORT",
    gold: 2500,
    image: "img/Staff_of_Flowing_Water_item_Unused_HD.png",
    stats: { AP: 50, HP: 100, MANA_REGEN: 50, HEAL: 5, CD: 15 },
    passives: [
      { title: "Rapids", desc: "Healing or shielding an ally grants you and them 15 Ability Haste and bonus 30 - 50 Ability Power for 4 seconds." },
    ],
  },
  {
    title: "Zeke's Convergence",
    category: "SUPPORT",
    gold: 2700,
    image: "img/Zeke's_Convergence_item_Unused_HD.png",
    stats: { HP: 350, ARMOR: 40, MAX_MANA: 150, CD: 15 },
    passives: [
      { title: "Harbinger", desc: "Casting your Ultimate surrounds you with a blizzard for 10s. The blizzard deals a maximum of 320-600 damage, slows nearby enemies by 25%, and leaves a trail behind you. Allied champions on the trail gain 40 Movement Speed for 1s (30s cooldown)." },
    ],
  },
  {
    title: "Yordle Trap",
    category: "SUPPORT",
    gold: 2600,
    image: "img/Yordle_Trap.webp",
    stats: { HP: 350, ARMOR: 40, CD: 15 },
    passives: [
      {title: "Catcher", desc: "After using abilities to displace an enemy gain 10% Movement Speed for 3 seconds and mark their targets reducing their Armor and Magic Resist by 5-12 for 8s. If the target dies while marked their death grants 100-140 bonus gold that will be shared evenly among you and your nearby allies."},
    ],
  },
  {
    title: "Harmonic Echo",
    category: "SUPPORT",
    gold: 2800,
    image: "img/Harmonic_Echo.png",
    stats: { HP: 100, AP: 50, MAX_MANA: 300, MANA_REGEN: 50, CD: 15, HEAL: 5},
    passives: [
      {title: "Harmonic Echo", desc: "Moving and casting abilities builds Harmony. At 100 Harmony, your next healing or shielding ability cast on an ally restores (100-160 + 15% AP) Health. If the target has less than 30% HP the effect is increased to 130%"},
    ],
  },
];
