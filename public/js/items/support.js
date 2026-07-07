// Support items — part of the ITEMS catalog (see items.js).
const SUPPORT_ITEMS = [
  {
    title: "Ardent Censer",
    category: "SUPPORT",
    gold: 2700,
    image: "img/Ardent_Censer_item_HD.png",
    stats: { AP: 35, HP: 250, CD: 20, MANA_REGEN: 50, HEAL: 5 },
    passives: [
      { title: "Ardent", desc: "Grants +5% Move Speed." , stats: { SPEED_PERCENTAGE: 5 }},
      { title: "Censer", desc: "Healing or shielding an allied champion (excluding yourself) they gain bonus Attack Speed 15% - 40% and their basic attacks deal bonus magic damage  16-30 for 6 seconds. This damage can critically strike" },
    ],
  },
  {
    title: "Imperial Mandate",
    category: "SUPPORT",
    gold: 2500,
    image: "img/Imperial_Mandate_item_HD.png",
    stats: { AP: 40, HP: 200, CD: 20 },
    passives: [
      { title: "Coordinated Fire", desc: "Abilities that slow or immobilize a champion deal bonus magic damage and mark them. Ally damage detonates the mark for bonus magic damage and move speed to both." },
    ],
  },
  {
    title: "Knight's Vow",
    category: "SUPPORT",
    gold: 2600,
    image: "img/Knight's_Vow_item_HD.png",
    stats: { ARMOR: 40, HP: 400, CD: 10 },
    passives: [
      { title: "Pledge", desc: "Designate an allied champion as Worthy, forming a tether between you and them." },
      { title: "Sacrifice", desc: "While tethered and above 30% health, redirect a portion of your Worthy ally's damage taken to yourself. Heal for a portion of damage your Worthy ally deals to champions." },
    ],
  },
  // NOTE: Radiant Virtue was an Arena-exclusive PC LoL item (removed from LoL entirely in May 2025) and does not appear to be a standard Wild Rift item — stats below are best-effort from its last known PC version.
  {
    title: "Radiant Virtue",
    category: "SUPPORT",
    gold: 1000,
    image: "img/Radiant_Virtue_item_HD.png",
    stats: { HP: 400, ARMOR: 35, MR: 35, CD: 12 },
    passives: [
      { title: "Guiding Light", desc: "Casting your ultimate Transcends you for 9 seconds, increasing max Health by 10% and granting nearby allies bonus Ability Haste and periodic healing." },
    ],
  },
  {
    title: "Staff of Flowing Water",
    category: "SUPPORT",
    gold: 2500,
    image: "img/Staff_of_Flowing_Water_item_Unused_HD.png",
    stats: { AP: 65, MAX_MANA: 350, CD: 20 },
    passives: [
      { title: "Rapids", desc: "Healing or shielding an ally grants you and them 20 Ability Haste and bonus Ability Power for 4 seconds." },
    ],
  },
  {
    title: "Zeke's Convergence",
    category: "SUPPORT",
    gold: 2800,
    image: "img/Zeke's_Convergence_item_Unused_HD.png",
    stats: { ARMOR: 40, MR: 40, MAX_MANA: 150, CD: 10 },
    passives: [
      { title: "Harbinger", desc: "Casting your ultimate ignites a nearby ally's attacks and surrounds you both with a blizzard that slows enemies and burns them for bonus magic damage." },
      { title: "Frostfire Covenant", desc: "Your blizzard ignites burning enemies caught in it, dealing bonus magic damage per second and slowing them further." },
    ],
  },
  {
    title: "Yordle Trap",
    category: "SUPPORT",
    gold: 2500,
    image: "img/Yordle_Trap.webp",
    stats: { HP: 350, ARMOR: 40, CD: 15 },
    passives: [
      {title: "Catcher", desc: "After using abilities to displace an enemy gain 10% for 3 seconds and mark their targets reducing their Armor and Magic Resist by 5-12 for 8s. If the target dies while marked their death grants 100-120 bonus gold that will be shared evenly among you and your nearby allies."},
    ],
  },
  {
    title: "Harmonic Echo",
    category: "SUPPORT",
    gold: 2600,
    image: "img/Harmonic_Echo.png",
    stats: { HP: 100, AP: 50, MAX_MANA: 300, MANA_REGEN: 50, CD: 10, HEAL: 8},
    passives: [
      {title: "Harmonic Echo", desc: "Moving and casting abilities builds Harmony. At 100 Harmony, your next healing or shielding ability cast on an ally restores more health scaling with 20% AP, if the target has less than 30% HP the effect is increased to 150%"},
    ],
  },
];
