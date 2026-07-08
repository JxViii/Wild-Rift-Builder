// Defense items — part of the ITEMS catalog (see items.js).
const DEFENSE_ITEMS = [
  // Patch 7.1
  {
    title: "Guardian Angel",
    category: "DEFENSE",
    gold: 3200,
    image: "img/Guardian_Angel_item_HD.png",
    stats: { AD: 45, ARMOR: 40 },
    passives: [
      { title: "Resurrect", desc: "Upon taking lethal damage, restore 50% base HP and 100% MAX MANA after 4 seconds of extasis. (180s cooldown)" },
    ],
  },
  // Patch 7.1
  {
    title: "Force of Nature",
    category: "DEFENSE",
    gold: 2750,
    image: "img/Force_of_Nature_item_HD.png",
    stats: { MR: 60, HP: 350 },
    passives: [
      { title: "Storm", desc: "+ 5% Movement Speed.", stats: { SPEED_PERCENTAGE: 5 }},
      { title: "Absorb", desc: "Taking magic damage from enemy championsgrants 1 stack for 7 seconds, max 4 stacks. Dealing damage to an enemy Champion will refresh the duration of the stacks. At maximum stacks, gain 10% Movement Speed and reduce all incoming magic damage by 20%." },
    ],
  },
  // Patch 7.1
  {
    title: "Frozen Heart",
    category: "DEFENSE",
    gold: 2650,
    image: "img/Frozen_Heart_item_HD.png",
    stats: { ARMOR: 80, MAX_MANA: 250, CD: 20 },
    passives: [
      { title: "Winter's Caress", desc: "Against champions, basic attacks and magic damage you deal or take will inflict a stack of Chill to the enemy champion for 3 seconds. Each stack of Chill slows enemy atk speed by 9% up to a maximum of 4 stacks or 36% attack speed reduction. Each individual ability has a 3 second cd on applying Chill stacks." },
    ],
  },
  // Patch 7.1
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
  // Patch 7.1
  {
    title: "Dead Man's Plate",
    category: "DEFENSE",
    gold: 2800,
    image: "img/Dead_Man's_Plate_item_HD.png",
    stats: { ARMOR: 70, HP: 350},
    passives: [
      { title: "Relentless", desc: "+5% Movement Speed", stats: { SPEED_PERCENTAGE: 5 }},
      { title: "Momentum", desc: "Moving builds Momentum, granting up to 40 bonus Move Speed at 100 stacks. Attacking removes all Momentum. Stacks decay when movement is impaired." },
      { title: "Crushing Blow", desc: "Attacks deal up to 100 bonus ap dmg based on Momentum removed. Melee attacks with max Momentum slow by 75% for 1 second." }
    ],
  },
  // Patch 7.1
  {
    title: "(mana2) Fimbulwinter",
    category: "DEFENSE",
    gold: 2600,
    image: "img/Fimbulwinter_item_HD.png",
    bannedSet: ["MANAFLOW"],
    stats: { HP: 350, MAX_MANA: 1200, CD: 15 },
    passives: [
      { title: "Awe", desc: "Grants bonus Health equal to 8% of max Mana and refunds 15% of all Mana spent." },
      { title: "Frozen Colossus", desc: "Immobilizing or slowing an enemy champion consumes 3% current Mana to grant a shield for 3 seconds, absorbing 90-180 (+ 4.5% of current Mana), increased by 80% if there is more than 1 enemy champion nearby. Only triggers when above 20% max Mana (8s cooldown). Shield is 50% effective for ranged champions." },
    ],
  },
  // Patch 7.1
  {
    title: "(mana1) Winter's Approach",
    category: "DEFENSE",
    gold: 2600,
    image: "img/Winter's_Approach_item_HD.png",
    bannedSet: ["MANAFLOW"],
    stats: { HP: 350, MAX_MANA: 500, CD: 15 },
    passives: [
      { title: "Awe", desc: "Grants bonus Health equal to 8% of max Mana and refunds 15% of all Mana spent." },
      { title: "Mana Charge", desc: "Increases max Mana by 12 every attack, when Mana is spent or when taking dmg from champions, epic monsters or towers. Caps at 700 bonus Mana, transforming Winter's Approach inot Fimbulwinter. Triggers up to 3 times every 10 segs. You may only carry 1 of these Tear of Goddess item at a time." },
    ],
  },
  // Patch 7.1
  {
    title: "Heartsteel",
    category: "DEFENSE",
    gold: 2800,
    image: "img/Heartsteel_item_HD.png",
    stats: { HP: 700, CD: 20, HP_REGEN: 150 },
    passives: [
      { title: "Colossal Consumption", desc: "While within 700 units of an enemy champion, charges for 2.5segs before dealing a huge strike against the enemy champion. This charged attack deals bonus ad dmg equal to 140 (+ 3.5% of max hp), and grants maximun hp equal to 15% of the dmg dealt (20s cooldown for each target).", stats: { HP: 0 }},
    ],
  },
  // Patch 7.1
  {
    title: "Hollow Radiance",
    category: "DEFENSE",
    gold: 2800,
    image: "img/Hollow_Radiance_item_HD.png",
    bannedSet: ["BURN"],
    stats: { CD: 15, HP: 400, MR: 40 },
    passives: [
      { title: "Immolate", desc: "While in combat, deal magic damage equal to 20-30 (+ 1% of your bonus hp) per second for 5 segs to nearby enemies. Deals 125% dmg against monsters and 200% dmg against minions." },
      { title: "Desolate", desc: "Killing a neutral monster or enemy champion deals magic damage equals to 30 (+ 2% of bonus hp) in and area around them." },
    ],
  },
  // Patch 7.1
  {
    title: "Iceborn Gauntlet",
    category: "DEFENSE",
    gold: 3100,
    image: "img/Iceborn_Gauntlet_item_HD.png",
    bannedSet: ["SPELLBLADE"],
    stats: { HP: 250, MAX_MANA: 250, ARMOR: 50, CD: 30 },
    passives: [
      { title: "Spellblade", desc: "After using an ability, your next basic attack (within 10 seconds) deals bonus physical damage on-hit equal to (100% base ad + 25% bonus armor) to surrounding enemies and creates an icy field for 2 seconds that slows them by 30%. Armor increases the size of the icy field (1.5s CD) Damage is reduced vs structures." },
    ],
  },
  // Patch 7.1
  {
    title: "Kaenic Rookern",
    category: "DEFENSE",
    gold: 2800,
    image: "img/Kaenic_Rookern_item_HD.png",
    stats: { HP: 350, MR: 75, HP_REGEN: 100 },
    passives: [
      { title: "Magebane", desc: "After not taking magic damage for 12 seconds, gain a magic shield that absorbs damage equal to 70-180 (+ 10% of max hp)." },
    ],
  },
  // {
  //  title: "Spirit Visage",
  //  category: "DEFENSE",
  //  gold: 2900,
  //  image: "img/Spirit_Visage_item_Unused_HD.png",
  //  stats: { HP: 350, MR: 45, CD: 10, HEAL: 30 },
  //  passives: [
  //    { title: "Blessed", desc: "Increases all healing, regen, shields, and drain effects on yourself by 30%." },
  //  ],
  // },
  // Patch 7.1
  {
    title: "Unending Despair",
    category: "DEFENSE",
    gold: 3000,
    image: "img/Unending_Despair_item_HD.webp",
    stats: { HP: 200, ARMOR: 45, MR: 45 },
    passives: [
      { title: "Anguish", desc: "Every 4 seconds while in combat with champions, deal magic damage to nearby enemy champions equal to 3% of your max Health as magic damage and heal for 250% of the damage dealt. Unaffected by Item Ability Haste" },
    ],
  },
  // Patch 7.1
  {
    title: "Sunfire Aegis",
    category: "DEFENSE",
    gold: 2900,
    image: "img/Sunfire_Aegis_item_HD.webp",
    bannedSet: ["BURN"],
    stats: { HP: 425, ARMOR: 20, CD: 15 },
    passives: [
      { title: "Immolate", desc: "While in combat, deal magic dmg equal to 16-25 (+0.8% of your bonus hp) per second. Damaging champs or epic monsters with Immolate increases the dmg they take by 5% for 5 seconds. stacking up to 6 times." },
      { title: "Flametouch", desc: " At max Immolate stacks, attacks burn enemies around you for 50% of Immolate's dmg over 3 segs. Immolate deals 130% dmg to monsters and 175-250% to minions."}
    ],
  },
  // Patch 7.1
  {
    title: "Warmog's Armor",
    category: "DEFENSE",
    gold: 2850,
    image: "img/Warmog.png",
    stats: { HP: 700, HP_REGEN: 100, CD: 20 },
    passives: [
      {title: "Warmog's Heart", desc: "If you have at least 950 bonus hp, restore 3.5% of your maximum hp every second after 5 seconds without taking damage."},
      {title: "Blessed", desc: " Increases all healing and shielding effects on you by 30%."}
    ],
  },
  // Patch 7.1
  {
    title: "Thormail",
    category: "DEFENSE",
    gold: 2700,
    image: "img/Thornmail_item.webp",
    stats: { HP: 200, ARMOR: 75 },
    passives: [
      {title: "Thorns", desc: "When struck by a basic attack on-hit, deal 20 (+ 6% bonus armor) (+ 1% bonus hp) magic dmg to the attacker."},
      {title: "Entwine", desc: " Apply 50% Grievous Wounds to enemy champions for 3 seconds when struck by their attacks or dealing dmg to them."}
    ],
  },
  // Patch 7.1
  {
    title: "Randuin's Omen",
    category: "DEFENSE",
    gold: 2800,
    image: "img/Randuins.webp",
    stats: { HP: 400, ARMOR: 75 },
    passives: [
      {title: "Countercurrent", desc: "Gain 1 stack of Countercurrent when Critically Strike by AD. Each stack grants 5% Movement speed and 5% Slow resist. Max 4 stacks"},
      {title: "Resilence", desc: "Critical Strikes deal 30% less physical damage to you"},
    ],
  },
  // Patch 7.1
  {
    title: "Dawnshroud",
    category: "DEFENSE",
    gold: 2700,
    image: "img/Dawnshroud.png",
    stats: { HP: 250, ARMOR: 50, MR: 30 },
    passives: [
      {title: "Dawnbringer", desc: "If you are within 400 units of an enemy champion when you immobilize an enemy champion or are immobilized by enemy champions, you deal 40 (+ 2.5% bonus hp) magic damage to nearby enemy champions, reveal them for 3 seconds and gain 20% armor and 20% magic resistance (3 second cooldown)."},
    ],
  },
  // Patch 7.1
  {
    title: "Amaranth's Twinguard",
    category: "DEFENSE",
    gold: 3100,
    image: "img/Twinguard.webp",
    stats: { ARMOR: 60, MR: 60 },
    passives: [
      {title: "Endurance", desc: "Generates 1 stack of Endurance every second in combat with champions (max 5 stacks). At max stacks, you gain 20% size, 20% tenacity, and 30% bonus armor and magic resistance until out of combat with champions.", stats: { TENACITY: 20 }},
    ],
  },
  // Patch 7.1
  {
    title: "Mantle of the Twelfth Hour",
    category: "DEFENSE",
    gold: 2850,
    image: "img/Mantle.webp",
    bannedSet: ["LIFELINE"],
    stats: { HP: 200 , ARMOR: 40, MR: 40 },
    passives: [
      {title: "Lifeline", desc: "If you take damage that would reduce you below 35% maximum health, you gain bonus max health equal to 180 (+ 45% bonus health) for 3 seconds, as well as 50% slow resistance and 30% bonus move speed (70 second cooldown)."},
    ],
  },
  // Patch 7.1
  {
    title: "Searing Crown",
    category: "DEFENSE",
    gold: 2700,
    image: "img/Searing_Crown.webp",
    stats: { HP: 300 , ARMOR: 50 },
    passives: [
      {title: "Fiery Touch", desc: "Your basic attacks and ability hits inflict a burn that deals magic damage equal to (Melee 1.4% / Ranged 0.7%) target's maximum health per second over 3 seconds. This deals 150% damage against minions and monsters, up to 125 damage against monsters."},
    ],
  },
];
