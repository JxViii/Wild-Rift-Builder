// Defense items — part of the ITEMS catalog (see items.js).
const DEFENSE_ITEMS = [
  {
    title: "Guardian Angel",
    category: "DEFENSE",
    gold: 3400,
    image: "img/Guardian_Angel_item_HD.png",
    stats: { AD: 40, ARMOR: 40 },
    passives: [
      { title: "Resurrect", desc: "Upon taking lethal damage, restore 50% base HP and 30% MAX MANA after 4 seconds of extasis." },
    ],
  },
  {
    title: "Force of Nature",
    category: "DEFENSE",
    gold: 2750,
    image: "img/Force_of_Nature_item_HD.png",
    stats: { MR: 60, HP: 350 },
    passives: [
      { title: "Storm", desc: "+5% Movement Speed", stats: { SPEED_PERCENTAGE: 5 }},
      { title: "Absorb", desc: "Taking magic damage grants 1 stack for 7 seconds, max 4 stacks. Dealing damage to an enemy Champion will refresh the duration of the stacks. At maximum stacks, gain 10% Movement Speed and reduce all incoming magic damage by 25%" },
    ],
  },
  {
    title: "Frozen Heart",
    category: "DEFENSE",
    gold: 2750,
    image: "img/Frozen_Heart_item_HD.png",
    stats: { ARMOR: 80, MAX_MANA: 200, CD: 25 },
    passives: [
      { title: "Winter's Caress", desc: "Against champions, basic attacks and magic damage you deal or take will inflict a stack of Chill lasting 3 seconds, refreshing on subsequent hits and stacking up to 4 times (1 second cooldown per ability per target). Each stack cripples the target's attack speed by 9%, stacking up to 36% reduction." },
    ],
  },
  {
    title: "Abyssal Mask",
    category: "DEFENSE",
    gold: 3000,
    image: "img/Abyssal_Mask_item_HD.png",
    stats: { HP: 400, MR: 55, CD: 10 },
    passives: [
      { title: "Unmake", desc: "Curses enemy champions within 600 units, reducing MR by 5 plus 1.2% Bonus HP, up to 25 MR. For each champion cursed, gain 9 bonus MR." },
    ],
  },
  {
    title: "Dead Man's Plate",
    category: "DEFENSE",
    gold: 2900,
    image: "img/Dead_Man's_Plate_item_HD.png",
    stats: { ARMOR: 70, HP: 350, SPEED_PERCENTAGE: 5 },
    passives: [
      { title: "Momentum", desc: "Moving builds Momentum, granting up to 50 bonus Move Speed at 100 stacks. Basic attacks expend all Momentum to deal bonus magic damage equal to the number of stacks; decays while movement is impaired." },
      { title: "Crushing Blow", desc: "Basic attacks that expend maximum Momentum also slow the target by 50% for 1 second." },
    ],
  },
  {
    title: "Fimbulwinter",
    category: "DEFENSE",
    gold: 2600,
    image: "img/Fimbulwinter_item_HD.png",
    bannedSet: ["MANAFLOW"],
    stats: { HP: 350, MAX_MANA: 1200, CD: 15 },
    passives: [
      { title: "Awe", desc: "Grants bonus Health equal to 8% of max Mana and refunds 15% of all Mana spent." },
      { title: "Frozen Colossus", desc: "Immobilizing or slowing an enemy champion consumes current Mana to grant a shield, increased if multiple enemy champions are nearby (8s cooldown)." },
    ],
  },
  {
    title: "Heartsteel",
    category: "DEFENSE",
    gold: 2800,
    image: "img/Heartsteel_item_HD.png",
    stats: { HP: 700, CD: 25 },
    passives: [
      { title: "Colossal Consumption", desc: "Enemy champions within range generate stacks over time, up to 6. Your next basic attack against a maximum-stack target consumes them to deal bonus physical damage on-hit and grants permanent bonus Health equal to a portion of that damage (30s cooldown per target)." },
    ],
  },
  // NOTE: gold/stats sourced from PC League of Legends data — could not confirm exact Wild Rift numbers; verify before relying on it.
  {
    title: "Hollow Radiance",
    category: "DEFENSE",
    gold: 2700,
    image: "img/Hollow_Radiance_item_HD.png",
    stats: { CD: 15, HP: 400, MR: 40 },
    passives: [
      { title: "Immolate", desc: "Taking or dealing damage burns nearby enemies for magic damage each second for 3 seconds, increased against minions (executes low-health minions)." },
      { title: "Desolate", desc: "Killing a non-champion unit erupts damage around it; scoring a champion takedown shortly after damaging them causes a larger eruption." },
    ],
  },
  {
    title: "Iceborn Gauntlet",
    category: "DEFENSE",
    gold: 3100,
    image: "img/Iceborn_Gauntlet_item_HD.png",
    bannedSet: ["SPELLBLADE"],
    stats: { HP: 250, MAX_MANA: 250, ARMOR: 50, CD: 25 },
    passives: [
      { title: "Spellblade", desc: "After using an ability, your next basic attack deals bonus physical damage on-hit to surrounding enemies and creates an icy zone that slows them." },
    ],
  },
  {
    title: "Kaenic Rookern",
    category: "DEFENSE",
    gold: 2800,
    image: "img/Kaenic_Rookern_item_HD.png",
    stats: { HP: 350, MR: 75, HP_REGEN: 100 },
    passives: [
      { title: "Magebane", desc: "After not taking magic damage for 12 seconds, gain a magic shield that absorbs damage based on max health." },
    ],
  },
  {
    title: "Spirit Visage",
    category: "DEFENSE",
    gold: 2900,
    image: "img/Spirit_Visage_item_Unused_HD.png",
    stats: { HP: 350, MR: 45, CD: 10, HEAL: 30 },
    passives: [
      { title: "Blessed", desc: "Increases all healing, regen, shields, and drain effects on yourself by 30%." },
    ],
  },
  // NOTE: PC League of Legends data (no confirmed Wild Rift version).
  {
    title: "Unending Despair",
    category: "DEFENSE",
    gold: 2800,
    image: "img/Unending_Despair_item_HD.webp",
    stats: { HP: 400, ARMOR: 50, CD: 15 },
    passives: [
      { title: "Anguish", desc: "Every 4 seconds in combat with champions, deal magic damage to nearby enemy champions equal to 3% of your bonus Health and heal for 250% of the post-mitigation damage dealt. Limited to 1 per champion." },
    ],
  },
  {
    title: "Sunfire Aegis",
    category: "DEFENSE",
    gold: 2800,
    image: "img/Sunfire_Aegis_item_HD.webp",
    stats: { HP: 350, ARMOR: 40, CD: 10 },
    passives: [
      { title: "Immolate", desc: "Taking or dealing damage burns nearby enemies for magic damage each second, increased against minions (executes low-health minions)." },
    ],
  },
  {
    title: "Warmog's Armor",
    category: "DEFENSE",
    gold: 2850,
    image: "img/Warmog.png",
    stats: { HP: 700, HP_REGEN: 100, CD: 20 },
    passives: [
      {title: "Warmog's Heart", desc: "If you have at least 950 bonus health, after 6 seconds without taking damage, you regenerate 5% maximum health every second."},
      {Title: "Bendition", desc: " Increases healing, shielding, health regeneration, and drain effects on yourself by 30%."}
    ],
  },
  {
    title: "Thormail",
    category: "DEFENSE",
    gold: 2700,
    image: "img/Thornmail_item.webp",
    stats: { HP: 200, ARMOR: 75 },
    passives: [
      {title: "Thorns", desc: "When struck by a basic attack on-hit, deal 20 (+ 6% bonus armor) (+ 2% bonus health) magic damage to the attacker, and inflict 60% Grievous Wounds for 3 seconds against champions."},
    ],
  },
  {
    title: "Randuin's Omen",
    category: "DEFENSE",
    gold: 2800,
    image: "img/Randuins.webp",
    stats: { HP: 400, ARMOR: 75 },
    passives: [
      {title: "Countercurrent", desc: "Gain 1 stack of Countercurrent when Critically Strike by AD. Each stack grants %5 Movement speed and 5% Slow resist. Max 4 stacks"},
      {title: "Resilence", desc: "Critical Strikes deal 30% less physical damage to you"},
    ],
  },
  {
    title: "Dawnshroud",
    category: "DEFENSE",
    gold: 2700,
    image: "img/Dawnshroud.png",
    stats: { HP: 250, ARMOR: 50, MR: 30 },
    passives: [
      {title: "Dawnbringer", desc: "If you are within 400 units of an enemy champion when you immobilize an enemy champion or are immobilized by enemy champions, you deal 80 (+ 5% bonus health) magic damage to nearby enemy champions and reveal them for 3 seconds (3 second cooldown)."},
    ],
  },
  {
    title: "Amaranth's Twinguard",
    category: "DEFENSE",
    gold: 3100,
    image: "img/Twinguard.webp",
    stats: { ARMOR: 60, MR: 60 },
    passives: [
      {title: "Endurance", desc: "Generates a stack of Endurance every second in combat with champions, which expires out of combat and stacks up to 5 times. At max stacks, you gain 30% size, 20% tenacity, and 30% bonus armor and magic resistance."},
    ],
  },
  {
    title: "Mantle of the Twelfth Hour",
    category: "DEFENSE",
    gold: 2850,
    image: "img/Mantle.webp",
    stats: { HP: 200 , ARMOR: 40, MR: 40 },
    passives: [
      {title: "Lifeline", desc: "If you take damage that would reduce you below 35% maximum health, you gain base health equal to 200 (+ 50% bonus health) over 3 seconds, as well as 50% slow resistance and 30% bonus move speed (90 second cooldown)."},
    ],
  },
  {
    title: "Searing Crown",
    category: "DEFENSE",
    gold: 2700,
    image: "img/Searing_Crown.webp",
    stats: { HP: 300 , ARMOR: 50 },
    passives: [
      {title: "Lifeline", desc: "Your basic attacks and ability hits inflict a burn that deals magic damage equal to (Melee 1.4% / Ranged 0.7%) target's maximum health per second over 3 seconds. This deals 150% damage against minions and monsters, up to 125 damage against monsters."},
    ],
  },
];
