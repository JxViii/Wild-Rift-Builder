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
  // Patch 7.3
  {
    title: "Force of Nature",
    category: "DEFENSE",
    gold: 2800,
    image: "img/Force_of_Nature_item_HD.png",
    stats: { MR: 60, HP: 400 },
    passives: [
      { title: "Storm", desc: "+ 5% Movement Speed.", stats: { SPEED_PERCENTAGE: 5 } },
      { title: "Absorb", desc: "Taking magic damage from enemy champions grants 1 Steadfast stack, up to 4, for 7 seconds. Dealing damage to an enemy champions refreshes the duration of the stacks. At maximum stacks, gain 6% Movement Speed and 70 bonus Magic Resist." },
    ],
  },
  // Patch 7.3
  {
    title: "Frozen Heart",
    category: "DEFENSE",
    gold: 2650,
    image: "img/Frozen_Heart_item_HD.png",
    stats: { ARMOR: 80, MAX_MANA: 400, CD: 20 },
    passives: [
      { title: "Winter's Caress", desc: "All enemy champions within 650 units lose 25% Attack Speed." },
    ],
  },
  // Patch 7.3
  {
    title: "Abyssal Mask",
    category: "DEFENSE",
    gold: 2400,
    image: "img/Abyssal_Mask_item_HD.png",
    stats: { HP: 350, MR: 45, CD: 10 },
    passives: [
      { title: "Unmake", desc: "All enemy champions within 6.5 meters take 12% increased magic damage." },
    ],
  },
  // Patch 7.3
  {
    title: "Dead Man's Plate",
    category: "DEFENSE",
    gold: 2800,
    image: "img/Dead_Man's_Plate_item_HD.png",
    stats: { ARMOR: 70, HP: 350, SPEED_PERCENTAGE: 4 },
    passives: [
      { title: "Momentum", desc: "Moving builds Momentum, granting up to 40 bonus Move Speed at 100 stacks. Attacking removes all Momentum. Stacks decay when movement is impaired." },
      { title: "Crushing Blow", desc: "Attacks deal up to 100 bonus ap dmg based on Momentum removed. Melee attacks with max Momentum slow by 75% for 1 second." }
    ],
  },
  // Patch 7.1
  // {
  //   title: "(mana2) Fimbulwinter",
  //   category: "DEFENSE",
  //   gold: 2600,
  //   image: "img/Fimbulwinter_item_HD.png",
  //   bannedSet: ["MANAFLOW"],
  //   stats: { HP: 350, MAX_MANA: 1200, CD: 15 },
  //   passives: [
  //     { title: "Awe", desc: "Grants bonus Health equal to 8% of max Mana and refunds 15% of all Mana spent." },
  //     { title: "Frozen Colossus", desc: "Immobilizing or slowing an enemy champion consumes 3% current Mana to grant a shield for 3 seconds, absorbing 90-180 (+ 4.5% of current Mana), increased by 80% if there is more than 1 enemy champion nearby. Only triggers when above 20% max Mana (8s cooldown). Shield is 50% effective for ranged champions." },
  //   ],
  // },
  // Patch 7.3
  {
    title: "Winter's Approach",
    category: "DEFENSE",
    gold: 2600,
    image: "img/Winter's_Approach_item_HD.png",
    bannedSet: ["MANAFLOW"],
    stats: { HP: 500, MAX_MANA: 500, CD: 15 },
    passives: [
      { title: "Awe", desc: "Gain bonus Health equal to 15% of max Mana and refund 15% of total Mana spent.", stats: { MANA_HP : 15 } },
      { title: "Mana Charge", desc: "Basic attacks, Mana expenditure, and taking damage from champions, structures and epic monsters grant 14 max Mana, up to 700, transforming Winter's Approach into Fimbulwinter. Triggers at most 3 times every 10 seconds. Limited to one Tear of the Goddess item." },
    ],
    stack: {
      stats: { MAX_MANA: 1 },
      min: "0",
      max: "700",
      title: "Fimbulwinter",
      img: "img/Fimbulwinter_item_HD.png",
      passives: [{ title: "Frozen Colossus", desc: "Whenever you impair an enemy champion's movement, gain a shield for 3 seconds that absorbs 120 + 4.5% max Mana. If more than one enemy champion is nearby, the shield is increased by 80%. (8 second cooldown) Ranged champions use this shield at 50% effectiveness." }],
      delete: "Mana Charge"
    }
  },
  // Patch 7.1
  {
    title: "Heartsteel",
    category: "DEFENSE",
    gold: 2800,
    image: "img/Heartsteel_item_HD.png",
    stats: { HP: 700, CD: 20, HP_REGEN: 150 },
    passives: [
      {
        title: "Colossal Consumption", desc: "While within 700 units of an enemy champion, charges for 2.5segs before dealing a huge strike against the enemy champion. This charged attack deals bonus ad dmg equal to 140 (+ 3.5% of max hp), and grants maximun hp equal to 15% of the dmg dealt (20s cooldown for each target)."
      },
    ],
    stack: {
      stats: { HP: 1 },
      min: "0",
      max: "2000"
    }
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
    gold: 3000,
    image: "img/Iceborn_Gauntlet_item_HD.png",
    bannedSet: ["SPELLBLADE"],
    stats: { HP: 300, MAX_MANA: 250, ARMOR: 50, CD: 30 },
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
    stats: { HP: 350, MR: 80, HP_REGEN: 100 },
    passives: [
      { title: "Magebane", desc: "After not taking magic damage for 12 seconds, gain a magic shield that absorbs damage equal to 50-150 (+ 14% of max hp)." },
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
  // Patch 7.2
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
  // Patch 7.3
  {
    title: "Sunfire Aegis", 
    category: "DEFENSE",
    gold: 2900,
    image: "img/Sunfire_Aegis_item_HD.webp",
    bannedSet: ["BURN"],
    stats: { HP: 350, ARMOR: 40, CD: 15 },
    passives: [
      { title: "Immolate", desc: "Upon entering combat, deals 20 + 1.5% bonus Health Magic Damage to nearby enemies every second. Immolate deals 175%–250% damage to minions and 130% damage to monsters." },
    ],
  },
  // Patch 7.3n
  {
    title: "Warmog's Armor",
    category: "DEFENSE",
    gold: 2850,
    image: "img/Warmog.png",
    stats: { HP: 700, HP_REGEN: 100, CD: 20 },
    passives: [
      { title: "Warmog's Heart", desc: "If you have at least 1250 bonus hp, restore 3.5% of your maximum hp every second after 5 seconds without taking damage." },
      { title: "Blessed", desc: " Increases all healing and shielding effects on you by 30%." }
    ],
  },
  // Patch 7.3b
  {
    title: "Thormail",
    category: "DEFENSE",
    gold: 2850,
    image: "img/Thornmail_item.webp",
    stats: { HP: 200, ARMOR: 75 },
    passives: [
      { title: "Thorns", desc: "When struck by a basic attack on-hit, deal 20 (+ 6% bonus armor) (+ 1% bonus hp) magic dmg to the attacker." },
      { title: "Entwine", desc: " Apply 50% Grievous Wounds to enemy champions for 3 seconds when struck by their attacks or dealing dmg to them." }
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
      { title: "Countercurrent", desc: "Gain 1 stack of Countercurrent when Critically Strike by AD. Each stack grants 5% Movement speed and 5% Slow resist. Max 4 stacks" },
      { title: "Resilence", desc: "Critical Strikes deal 30% less physical damage to you" },
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
      { title: "Dawnbringer", desc: "If you are within 400 units of an enemy champion when you immobilize an enemy champion or are immobilized by enemy champions, you deal 40 (+ 2.5% bonus hp) magic damage to nearby enemy champions, reveal them for 3 seconds and gain 20% armor and 20% magic resistance (3 second cooldown)." },
    ],
  },
  // Patch 7.3
  {
    title: "Amaranth's Twinguard",
    category: "DEFENSE",
    gold: 3200,
    image: "img/Twinguard.webp",
    stats: { HP: 300, ARMOR: 50, MR: 50 },
    passives: [
      { title: "Endurance", desc: "While in combat with enemy champions, gain 1 Endurance stack each second, up to 5 stacks. At max stacks, gain 20% increased size, 20% Tenacity, 30% bonus Armor, and 30% bonus Magic Resistance until leaving combat.", stats: { TENACITY: 20 } },
    ],
  },
  // Patch 7.3
  {
    title: "Mantle of the Twelfth Hour",
    category: "DEFENSE",
    gold: 2550,
    image: "img/Mantle.webp",
    bannedSet: ["LIFELINE"],
    stats: { HP: 600, CD: 20 },
    passives: [
      { title: "Lifeline", desc: "When you drop below 30% max Health, immediately gain 200 - 300 bonus Health for 5 seconds, and heal over 5 seconds for 200 - 400 + 120% bonus Armor + 120% bonus Magic Resistance + 15% bonus Health. During this time, gain 10% size, 10% bonus Movement Speed and 20% Tenacity." },
    ],
  },
  // Patch 7.1
  // {
  //   title: "Searing Crown",
  //   category: "DEFENSE",
  //   gold: 2700,
  //   image: "img/Searing_Crown.webp",
  //   stats: { HP: 300, ARMOR: 50 },
  //   passives: [
  //     { title: "Fiery Touch", desc: "Your basic attacks and ability hits inflict a burn that deals magic damage equal to (Melee 1.4% / Ranged 0.7%) target's maximum health per second over 3 seconds. This deals 150% damage against minions and monsters, up to 125 damage against monsters." },
  //   ],
  // },
];
