// Magic items — part of the ITEMS catalog (see items.js).
const MAGIC_ITEMS = [
  {
    title: "Rabadon's Deathcap",
    category: "MAGIC",
    gold: 3400,
    image: "img/Rabadon's_Deathcap_item_HD.png",
    stats: { AP: 130 },
    passives: [
      { title: "Magical Opus", desc: "Increases Ability Power by 30%", stats: { AP_PERCENTAGE: 30 } },
    ],
  },
  {
    title: "Luden's Tempest",
    category: "MAGIC",
    gold: 2800,
    image: "img/Luden's_Tempest_item_HD.png",
    stats: { AP: 100, MAX_MANA: 500, CD: 10 },
    passives: [
      { title: "Discordic Echo", desc: "Damaging an enemy with an ability deals bonus magic damage 110 + 10%AP. (10s cooldown)" },
    ],
  },
  {
    title: "Liandry's Torment",
    category: "MAGIC",
    gold: 3000,
    image: "img/Liandry's_Torment_item_HD.png",
    stats: { AP: 70, HP: 300 },
    passives: [
      { title: "Torment", desc: "Damaging abilities burn enemies, dealing bonus magic damage over time 2% of the targets max HP as bonus magic damage per second for 3 seconds" },
      {
        title: "Madness", desc: "While in combat with enemy champions, deal 2% increased damage every second, up to 6%"
      },
    ],
  },
  {
    title: "Nashor's Tooth",
    category: "MAGIC",
    gold: 2800,
    image: "img/Nashor's_Tooth_item_HD.png",
    stats: { ATTACK_SPEED: 45, CD: 20 },
    passives: [
      { title: "Magic Fang", desc: "Obtain 25 AD or 50 AP", stats: { ADAPTATIVE: 50 } },
      { title: "Icathian Bite", desc: "Basic attacks deal bonus magic damage on-hit (15 AP + 20% Bonus AD + 30% Bonus AP)." },
    ],
  },
  // NOTE: Actualizer is an AAA ARAM-exclusive item; stats/gold uncertain, verify in-game.
  // {
  //   title: "Actualizer",
  //   category: "MAGIC",
  //   gold: 2200,
  //   image: "img/Actualizer_item_HD.png",
  //   stats: { AP: 60, MAX_MANA: 300, CD: 10 },
  //   passives: [
  //     { title: "Mana Burst", desc: "AAA ARAM exclusive item that grants a burst window for mages built around mana and ability usage." },
  //   ],
  // },
  {
    title: "Archangel's Staff",
    category: "MAGIC",
    gold: 3000,
    image: "img/Archangel's_Staff_item_HD.png",
    bannedSet: ["LIFELINE", "MANAFLOW"],
    stats: { AP: 60, MAX_MANA: 500, CD: 25 },
    passives: [
      { title: "Awe", desc: "Grants Ability Power equal to 1% of max Mana and refunds 25% of all Mana spent.", stats: { MANA_AP: 1 } },
      { title: "Mana Charge", desc: "Increases max Mana by 14 every time Mana is spent, up to 3 times every 10 seconds. Caps at 700 bonus Mana, transforming the item into Seraph's Embrace." },
    ],
  },
  {
    title: "Seraph's Embrace",
    category: "MAGIC",
    gold: 3000,
    image: "img/Seraph's_Embrace_item.webp",
    bannedSet: ["LIFELINE", "MANAFLOW"],
    stats: { AP: 60, MAX_MANA: 1200, CD: 25 },
    passives: [
      { title: "Awe", desc: "Grants Ability Power equal to 2% of max Mana and refunds 25% of all Mana spent.", stats: { MANA_AP: 2 } },
      { title: "Mana Charge", desc: "Damage that puts you under 35% HP consumes 20% of your current Mana to grant a shield equal to that amount + 100 for 2s. (70s cooldown)" },
    ],
  },
  //! Verdant Barrier TODO
  {
    title: "Banshee's Veil",
    category: "MAGIC",
    gold: 3000,
    image: "img/Banshee's_Veil_item_HD.png",
    bannedSet: ["SPELLSHIELD"],
    stats: { AP: 105, MR: 40 },
    passives: [
      { title: "Annul", desc: "Grants a spell shield that blocks the next enemy ability. (30s cooldown)" },
    ],
  },
  // NOTE: Blackfire Torch is an AAA ARAM-exclusive item; exact stats/gold uncertain, verify in-game.
  {
    title: "Blackfire Torch",
    category: "MAGIC",
    gold: 2800,
    image: "img/Blackfire_Torch_item_HD.png",
    stats: { AP: 80, CD: 20, MAX_MANA: 500 },
    passives: [
      { title: "Baleful Blaze", desc: "Damaging abilities deal an additional 20 + 2% Ability Power magic damage per second for 3 seconds. Against monsters, they deal 40 + 2% Ability Power magic damage per second." },
      { title: "Blackfire", desc: "Each enemy champion, epic monster, and large monster affected by your Balefire grants 4% AP." }
    ],
  },
  // NOTE: Bloodletter's Curse stats taken from PC League of Legends data; Wild Rift numbers may differ slightly, verify.
  {
    title: "Bloodletter's Curse",
    category: "MAGIC",
    gold: 2900,
    image: "img/Bloodletter's_Curse_item_HD.png",
    bannedSet: ["BLIGHT"],
    stats: { AP: 65, HP: 350, CD: 15 },
    passives: [
      { title: "Vile Decay", desc: "When abilities or passives deal magic damage to champions, reduce their Magic Resist by 7.5% for 6 seconds, stacking up to 30%." },
    ],
  },
  {
    title: "Cosmic Drive",
    category: "MAGIC",
    gold: 3000,
    image: "img/Cosmic_Drive_item_HD.png",
    stats: { AP: 70, CD: 25, HP: 300 },
    passives: [
      { title: "Spellweaving", desc: "Dealing damage with abilities grants bonus +30 Movement Speed for 4 seconds." },
    ],
  },
  // {
  //   title: "Crown of the Shattered Queen",
  //   category: "MAGIC",
  //   gold: 3000,
  //   image: "img/Crown_of_the_Shattered_Queen_item_HD.png",
  //   stats: { AP: 60, MAX_MANA: 200, CD: 20, MP_PERCENTAGE: 7 },
  //   passives: [
  //     { title: "Safeguard", desc: "Grants a spell shield that blocks the next hostile ability." },
  //     { title: "Poise", desc: "While Safeguard is not on cooldown, gain 20 Ability Power; damaging active abilities against champions reduce Safeguard's remaining cooldown." },
  //   ],
  // },
  {
    title: "Cryptbloom",
    category: "MAGIC",
    gold: 3000,
    image: "img/Cryptbloom_item_HD.png",
    bannedSet: ["BLIGHT"],
    stats: { AP: 75, CD: 20, MP_PERCENTAGE: 30 },
    passives: [
      { title: "Life from Death", desc: "Whenever an enemy champion dies within 3 seconds of taking damage from you, create a nova at their location that heals allied champions for 100 + 20% Ability Power Health. (60-second cooldown)" },
    ],
  },
  // NOTE: gold/stats sourced from PC League of Legends data — could not confirm this item exists in Wild Rift under current patches; verify before relying on it.
  {
    title: "Dusk and Dawn",
    category: "MAGIC",
    gold: 3100,
    image: "img/Dusk_and_Dawn_item_HD.png",
    bannedSet: ["SPELLBLADE"],
    stats: { HP: 350, AP: 70, CD: 20, ATTACK_SPEED: 25 },
    passives: [
      { title: "Spellblade", desc: "After casting an ability, your next attack deals an additional on-hit effect equal to 75% base Attack Damage + 10% Ability Power as magic damage and applies one extra on-hit effect to the target. (1.5-second cooldown)" },
    ],
  },
  {
    title: "Horizon Focus",
    category: "MAGIC",
    gold: 2700,
    image: "img/Horizon_Focus_item_HD.png",
    stats: { AP: 80, CD: 25 },
    passives: [
      { title: "Hypershot", desc: "Damaging an enemy champion with an ability from 600 units reveals them for 8 seconds and increases damage dealt to them by 10%." },
      { title: "Focus", desc: "When Hypershot triggers, it reveals all enemy champions within 1200 units of the target for 3 seconds (12s cooldown)." },
    ],
  },
  {
    title: "Lich Bane",
    category: "MAGIC",
    gold: 2800,
    image: "img/Lich_Bane_item_HD.png",
    bannedSet: ["SPELLBLADE"],
    stats: { AP: 100, CD: 10 },
    passives: [
      { title: "Spellblade", desc: "After using an ability, your next basic attack within 10 seconds deals bonus magic damage on-hit 75% Base AD + 45% AP." },
    ],
  },
  {
    title: "Malignance",
    category: "MAGIC",
    gold: 2700,
    image: "img/Malignance_item_HD.png",
    stats: { AP: 90, MAX_MANA: 500, CD: 15 },
    passives: [
      { title: "Scorn", desc: "Your Ultimate abilities gain 20 CD" },
      { title: "Hatefog", desc: "Ultimate ability damage against champions scorches the ground, burning enemies within for magic damage 60 + 5%AP over time and reducing their magic resist by 10." },
    ],
  },
  // {
  //   title: "Mejai's Soulstealer",
  //   category: "MAGIC",
  //   gold: 1800,
  //   image: "img/Mejai's_Soulstealer_item_HD.png",
  //   stats: { AP: 25, HP: 70 },
  //   passives: [
  //     { title: "Glory", desc: "Generate stacks for champion kills and assists, up to 30. Lose stacks on death." },
  //     { title: "Fear", desc: "Gain bonus AP per stack of Glory, and bonus move speed at 10+ stacks." },
  //   ],
  // },
  {
    title: "Morellonomicon",
    category: "MAGIC",
    gold: 2650,
    image: "img/Morellonomicon_item_HD.png",
    stats: { AP: 75, HP: 300, CD: 15 },
    passives: [
      { title: "Affliction", desc: "Dealing magic damage to enemy champions inflicts 50% Grievous Wounds for 3s." },
    ],
  },
  {
    title: "Riftmaker",
    category: "MAGIC",
    gold: 3100,
    image: "img/Riftmaker_item_Unused_HD.png",
    stats: { HP: 350, AP: 70, CD: 15 },
    passives: [
      { title: "Void Corruption", desc: "While in combat with enemy champions, gain 2% increased damage every second, up to 8%. At maximum stacks gain (10% Melee / 6% ranged) Omnivamp" },
      { title: "Void Infusion", desc: "Gain AP equal to 2% of your bonus HP", stats: { HP_AP : 2 } },
    ],
  },
  {
    title: "Rylai's Crystal Scepter",
    category: "MAGIC",
    gold: 2700,
    image: "img/Rylai's_Crystal_Scepter_item_Unused_HD.png",
    stats: { HP: 350, AP: 65 },
    passives: [
      { title: "Icy", desc: "Damaging abilities and empowered attacks slow enemies by 30% for 0.75 seconds." },
    ],
  },
  // NOTE: Void Staff has reportedly been removed from Wild Rift (legacy icon, "old2" suffix) — included with its last known stats for reference.
  {
    title: "Void Staff",
    category: "MAGIC",
    gold: 3000,
    image: "img/Void_Staff_item_old2_HD.png",
    bannedSet: ["BLIGHT"],
    stats: { AP: 95, MP_PERCENTAGE: 40 },
    passives: [],
  },
  // NOTE: PC League of Legends data (no confirmed Wild Rift version). Magic Pen scales 10-20 with target's missing health; 15 used as a flat approximation.
  // {
  //   title: "Shadowflame",
  //   category: "MAGIC",
  //   gold: 3000,
  //   image: "img/Shadowflame_item_HD.webp",
  //   stats: { AP: 100, HP: 200, MP: 15 },
  //   passives: [
  //     { title: "Cinderbloom", desc: "Magic damage and true damage critically strike (dealing 120-130% damage) enemies below 35% max health. Limited to 1 per player." },
  //   ],
  // },
  // NOTE: PC League of Legends data (no confirmed Wild Rift version).
  {
    title: "Stormsurge",
    category: "MAGIC",
    gold: 2900,
    image: "img/Stormsurge_item_HD.webp",
    stats: { AP: 90, SPEED_PERCENTAGE: 6, MP: 15 },
    passives: [
      { title: "Stormraider", desc: "When you deal damage equal to 25% of a champion's max Health within 2.5 seconds, inflict Squall on them and gain 25% Movement Speed for 2.5 seconds. (25-second cooldown)" },
      { title: "Squall", desc: "After 2 seconds, deal 125 + 10% Ability Power magic damage. If the target dies before Squall triggers, it instead deals the same amount of damage to nearby enemies and grants 25 gold." },
    ],
  },
  {
    title: "Rod of ages BASIC",
    category: "MAGIC",
    gold: 2700,
    image: "img/ROA.webp",
    bannedSet: ["ROA"],
    stats: { HP: 350, AP: 50, MAX_MANA: 400 },
    passives: [
      { title: "Eternity", desc: "Restore mana equal to 15% of incoming damage from champions, and Attack speed icon heal for an amount equal to 20% of mana spent, up to 25 per cast; toggle abilities can only heal for up to 25 per second." },
      { title: "Veterancy", desc: "This item gains 15 bonus health, 30 bonus mana and 4 ability power every 40 seconds, stacking up to 10 times." },
    ],
  },
  {
    title: "Rod of ages CHARGED",
    category: "MAGIC",
    gold: 2700,
    image: "img/Rod_of_Ages_item.webp",
    bannedSet: ["ROA"],
    stats: { HP: 500, AP: 90, MAX_MANA: 700 },
    passives: [
      { title: "Eternity", desc: "Restore mana equal to 15% of incoming damage from champions, and Attack speed icon heal for an amount equal to 20% of mana spent, up to 25 per cast; toggle abilities can only heal for up to 25 per second." },
    ],
  },
  {
    title: "Oceanic's Trident",
    category: "MAGIC",
    gold: 2600,
    image: "img/Oceanid_Tridents.png",
    stats: { HP: 200, AP: 80, CD: 10 },
    passives: [
      { title: "Lethal Weapon", desc: "Dealing ability damage to an enemy champion afflicts them for 3 seconds, reducing their active shields as well as any others they gain. Single-target abilities inflict (5% AP + 40)% reduction, capped at 60%. Area-of-effect abilities inflict (25+ 5% AP) reduction, capped at 45%." },
    ],
  },
  {
    title: "Infinity Orb",
    category: "MAGIC",
    gold: 3100,
    image: "img/Infinity_Orb.webp",
    stats: { AP: 110 },
    passives: [
      { title: "Balance", desc: "Gain +15 of Magic Penetration", stats: { MP: 15 }},
      { title: "Inevitable Demise", desc: "Abilities and empowered attacks will critically strike for 20% bonus damage against enemies below 35% HP" },
    ],
  },
];
