// Physical items — part of the ITEMS catalog (see items.js).
const PHYSICAL_ITEMS = [
  {
    title: "Infinity Edge",
    category: "PHYSICAL",
    gold: 3400,
    image: "img/Infinity_Edge_item_HD.png",
    stats: { AD: 65, CRIT: 25 },
    passives: [
      { title: "Infinity", desc: "Critical Strikes deal 205% damage instead of 175%" },
      { title: "Limit Break", desc: "When you gain CRIT from items that exceed 100%, every 1% excess grants 0.6% bonus Critical Damage"}
    ],
  },
  {
    title: "Bloodthirster",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Bloodthirster_item_HD.png",
    stats: { AD: 55, HP: 250, CRIT: 25 },
    passives: [
      { title: "Bloody", desc: "+8% Omnivamp. Attacks that Critically Strike gain and additional 4% Omnivamp", stats: { OMNIVAMP: 8 } },
    ],
  },
  {
    title: "Kraken Slayer",
    category: "PHYSICAL",
    gold: 2800,
    image: "img/Kraken_Slayer_item_HD.png",
    stats: { AD: 40, ATTACK_SPEED: 30 },
    passives: [
      { title: "Cloud Stride", desc: "+5% Movement Speed", stats: { SPEED_PERCENTAGE: 5 }},
      { title: "Bring It Down", desc: "Every third basic attack deals 120-160 bonus physical damage (110-150 for ranged champions), increased by 1% per 1% HP the target is missing, up to a 70% increase" },
    ],
  },
  {
    title: "Death's Dance",
    category: "PHYSICAL",
    gold: 3100,
    image: "img/Death's_Dance_item_HD.png",
    stats: { AD: 35, ARMOR: 40, CD: 15 },
    passives: [
      { title: "Defy", desc: "Champion takedowns remove Cauterize's remaining stored damage and heal you for 8% maximum health over 2 seconds."},
      { title: "Cauterize", desc: " Melee 27% / Ranged 12% of physical and magic damage taken from champions is instead dealt as true damage over 4 seconds, dealing a portion of the stored damage every second." },
    ],
  },
  // {
  //   title: "Axiom Arc",
  //   category: "PHYSICAL",
  //   gold: 2600,
  //   image: "img/Axiom_Arc_item_HD.png",
  //   stats: { AD: 55, ARMOR_PEN: 18, CD: 20 },
  //   passives: [
  //     { title: "Flux", desc: "Takedowns on champions refund a portion of your Ultimate's cooldown." },
  //   ],
  // },
  {
    title: "Black Cleaver",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Black_Cleaver_item_HD.png",
    bannedSet: ["FATALITY"],
    stats: { AD: 40, HP: 400, CD: 20 },
    passives: [
      { title: "Sunder", desc: "Dealing physical damage to a champion reduces their Armor by 6% for 6 seconds, stacking 5 times for 30% reduction total." },
      { title: "Rage", desc: "Gain 40 Move Speed when moving toward enemy champions with max Sunder stacks; otherwise gain 20 Move Speed when dealing physical damage (halved for ranged champions)." },
    ],
  },
  {
    title: "Blade of the Ruined King",
    category: "PHYSICAL",
    gold: 3200,
    image: "img/Blade_of_the_Ruined_King_item_HD.png",
    stats: { AD: 40, ATTACK_SPEED: 30, OMNIVAMP: 10 },
    passives: [
      { title: "Ruined Strikes", desc: "Basic attacks deal 7% of target's current Health as bonus physical damage (minimum 15, capped at 60 vs. monsters)." },
      { title: "Drain", desc: "Hitting a champion with 3 basic attacks or abilities deals bonus magic damage and steals 25% of their Move Speed for 3 seconds (60 second cooldown)." },
    ],
  },
  {
    title: "Chempunk Chainsword",
    category: "PHYSICAL",
    gold: 2800,
    image: "img/Chempunk_Chainsword_item_HD.png",
    stats: { AD: 40, HP: 250 },
    passives: [
      { title: "Sepsis", desc: "Dealing physical damage to enemy champions inflicts 50% Grievous Wounds for 3 seconds." },
    ],
  },
  {
    title: "Runaan's Hurricane",
    category: "PHYSICAL",
    gold: 2900,
    image: "img/Runans.png",
    stats: { CRIT: 25, ATTACK_SPEED: 35 },
    passives: [
      { title: "Wind's fury", desc: "Attacks strike 2 additional nearby enemies, each dealing 55%AD, these attack trigger on hit effects" },
      {
        title: "Wind Blade", desc:"Attacks deal 15 bonus AD on-hit"
      },
    ],
  },
  {
    title: "Divine Sunderer",
    category: "PHYSICAL",
    gold: 3450,
    image: "img/Divine_Sunderer_item_HD.png",
    bannedSet: ["SPELLBLADE"],
    stats: { HP: 400, AD: 25, CD: 25 },
    passives: [
      { title: "Spellblade", desc: "After using an ability, your next basic attack within 10 seconds deals bonus physical damage on-hit equal to a percent of the target's maximum health (higher % vs. minions/monsters), with a minimum equal to 125% base AD. Against champions, also heals you for a percent of the target's maximum health." },
    ],
  },
  {
    title: "Duskblade of Draktharr",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Duskblade_of_Draktharr_item_HD.png",
    stats: { AD: 55, CD: 10, ARMOR_PEN: 18 },
    passives: [
      { title: "Razor", desc: "+18 Armor Penetration." },
      { title: "Nightstalker", desc: "Your next basic attack against an enemy champion deals bonus physical damage and slows them heavily for a short duration (10s cooldown). Scoring a takedown resets the cooldown." },
    ],
  },
  {
    title: "Eclipse",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Eclipse_item_HD.png",
    stats: { AD: 65, CD: 20 },
    passives: [
      { title: "Ever Rising Moon", desc: "Hitting an enemy champion inflicts a stack (max one per attack/cast per champion, lasting 1.8s). At 2 stacks, they're consumed to deal bonus physical damage equal to a percent of the target's max health and grant you a shield scaling with bonus AD (6s cooldown)." },
    ],
  },
  {
    title: "Edge of Night",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Edge_of_Night_item_HD.png",
    bannedSet: ["SPELLSHIELD"],
    stats: { AD: 50, HP: 250, ARMOR_PEN: 8 },
    passives: [
      { title: "Gouge", desc: "+8 Armor Penetration." },
      { title: "Annul", desc: "Grants a spell shield that blocks the next enemy ability." },
    ],
  },
  {
    title: "Essence Reaver",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Essence_Reaver_item_HD.png",
    bannedSet: ["SPELLBLADE"],
    stats: { AD: 40, CRIT: 25, CD: 20 },
    passives: [
      { title: "Spellblade", desc: "Casting ability generates Spellblade charge (max 2 charges) that lasts up to 10 seconds.Hitting an enemy with an attack consumes a charge, dealing 70% base AD as physical damage and granting 40 Movement Speed for 2 seconds. This bonus damage can Critically Strike. Each ability generates only one charge per 2 seconds." },
      { title: "Mana Siphon", desc: "Attacks restore 3% missing Mana on-hit." },
    ],
  },
  // NOTE: gold/stats sourced from PC League of Legends data — could not confirm exact Wild Rift numbers; verify before relying on it.
  {
    title: "Experimental Hexplate",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Experimental_Hexplate_item_HD.png",
    stats: { AD: 35, ATTACK_SPEED: 20, HP: 400 },
    passives: [
      { title: "Hexcharged", desc: "Grants bonus Ultimate Haste." },
      { title: "Overdrive", desc: "Casting your ultimate ability grants bonus Attack Speed and Move Speed for 8 seconds (30s cooldown)." },
    ],
  },
  // NOTE: gold/stats sourced from PC League of Legends data — could not confirm exact Wild Rift numbers; verify before relying on it.
  {
    title: "Guinsoo's Rageblade",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Guinsoo's_Rageblade_item_HD.png",
    stats: { AD: 25, AP: 40, ATTACK_SPEED: 35 },
    passives: [
      { title: "Wrath", desc: "Attacks deal bonus magic damage on-hit." },
      { title: "Seething Strike", desc: "Basic attacks grant stacking bonus Attack Speed (up to 4 stacks). While fully stacked, every third attack applies on-hit effects twice." },
    ],
  },
  // NOTE: gold/stats sourced from PC League of Legends data; this item is noted as exclusive to a PC-only game mode (Hextech ARAM) and may not exist in Wild Rift at all — verify before relying on it.
  // {
  //   title: "Hubris",
  //   category: "PHYSICAL",
  //   gold: 3150,
  //   image: "img/Hubris_item_HD.png",
  //   stats: { AD: 65, CD: 15, ARMOR_PEN: 18 },
  //   passives: [
  //     { title: "Eminence", desc: "Scoring a champion takedown shortly after damaging them grants a permanent stack of bonus Attack Damage, up to a limit, decaying after 70 seconds without a takedown." },
  //   ],
  // },
  {
    title: "Hullbreaker",
    category: "PHYSICAL",
    gold: 3100,
    image: "img/Hullbreaker_item_HD.png",
    stats: { AD: 40, HP: 350, SPEED: 45 },
    passives: [
      { title: "Boarding Party", desc: "While no allied champions are nearby, gain bonus armor and magic resist and deal bonus damage to structures. Limited to 1 Hullbreaker." },
    ],
  },
  // {
  //   title: "Immortal Shieldbow",
  //   category: "PHYSICAL",
  //   gold: 3000,
  //   image: "img/Immortal_Shieldbow_item_HD.png",
  //   stats: { AD: 40, ATTACK_SPEED: 15, CRIT: 25, OMNIVAMP: 5 },
  //   passives: [
  //     { title: "Lifeline", desc: "If damage would reduce you below 35% max health, gain a shield that absorbs damage based on critical strike chance (90s cooldown). Also grants bonus Physical Vamp briefly." },
  //   ],
  // },
  {
    title: "Lord Dominik's Regards",
    category: "PHYSICAL",
    gold: 3300,
    image: "img/Lord_Dominik's_Regards_item_HD.png",
    bannedSet: ["FATALITY"],
    stats: { AD: 25, CRIT: 25, ARMOR_PEN_PERCENTAGE: 36 },
    passives: [
      { title: "Giant Slayer", desc: "Deal increased damage against champions based on their bonus health." },
    ],
  },
  {
    title: "(mana1) Manamune",
    category: "PHYSICAL",
    gold: 2500,
    image: "img/Manamune_item_HD.png",
    stats: { AD: 25, MAX_MANA: 300, CD: 10 },
    passives: [
      { title: "Awe", desc: "Grants bonus attack damage equal to a percent of max mana and refunds a portion of mana spent." },
      { title: "Mana Charge", desc: "Basic attacks and mana expenditure build charges that convert into bonus mana, up to transforming into Muramana." },
    ],
  },
  {
    title: "Maw of Malmortius",
    category: "PHYSICAL",
    gold: 2500,
    image: "img/Maw_of_Malmortius_item_HD.png",
    bannedSet: ["LIFELINE"],
    stats: { AD: 45, MR: 35, CD: 10 },
    passives: [
      { title: "Lifeline", desc: "If magic damage would reduce you below 35% max health, gain a shield that absorbs magic damage (70s cooldown)." },
      { title: "Lifegrip", desc: "Triggering Lifeline grants bonus attack damage, Physical Vamp, and Magic Vamp until out of combat." },
    ],
  },
  {
    title: "Mortal Reminder",
    category: "PHYSICAL",
    gold: 3300,
    image: "img/Mortal_Reminder_item_HD.png",
    bannedSet: ["FATALITY"],
    stats: { AD: 30, CRIT: 25, ARMOR_PEN_PERCENTAGE: 30 },
    passives: [
      { title: "Last Whisper", desc: "Grants 16-30% Armor Penetration (scales with level)." },
      { title: "Sepsis", desc: "Dealing physical damage to enemy champions inflicts 50% Grievous Wounds for 3 seconds." },
    ],
  },
  {
    title: "(mana2) Muramana",
    category: "PHYSICAL",
    gold: 2700,
    image: "img/Muramana_item_HD.png",
    bannedSet: ["MANAFLOW"],
    stats: { AD: 25, MAX_MANA: 1000, CD: 20 },
    passives: [
      { title: "Awe", desc: "Grants Attack Damage equal to 1.5% of max Mana and refunds 15% of all Mana spent." },
      { title: "Shock", desc: "Attacks against champions consume 3% of current Mana to deal double that amount as bonus physical damage. Only active while above 20% max Mana." },
    ],
  },
  // NOTE: Wild Rift's actual item is "Navori Quickblades" — "Navori Flickerblade" is the PC LoL name; stats below are PC-based and uncertain for WR.
  {
    title: "Navori Flickerblade",
    category: "PHYSICAL",
    gold: 2650,
    image: "img/Navori_Flickerblade_item_HD.png",
    stats: { ATTACK_SPEED: 40, CRIT: 25, SPEED_PERCENTAGE: 7 },
    passives: [
      { title: "Transcendence", desc: "Basic attacks on-attack reduce the remaining cooldowns of your basic abilities by 15%." },
    ],
  },
  {
    title: "Overlord's Bloodmail",
    category: "PHYSICAL",
    gold: 3200,
    image: "img/Overlord's_Bloodmail_item_HD.png",
    stats: { AD: 30, HP: 450 },
    passives: [
      { title: "Tyranny", desc: "Gain bonus Attack Damage equal to 2.5% of bonus Health.", stats: { HP_AD: 2.5 } },
      { title: "Retribution", desc: "Gain increased Attack Damage the more missing health you have, up to 9%. Maximum Retribution bonus while below 30% health." },
    ],
  },
  {
    title: "Phantom Dancer",
    category: "PHYSICAL",
    gold: 2900,
    image: "img/Phantom_Dancer_item_HD.png",
    stats: { AD: 20, CRIT: 25, ATTACK_SPEED: 40 },
    passives: [
      { title: "Swift-Foooted", desc: "Grants +5% bonus Move Speed.", stats: { SPEED_PERCENTAGE: 5 } },
      { title: "Spectral Waltz", desc: "Basic attacks grant 7% bonus Move Speed and 25% Attack Speed for 6s. Bonuses do not stack (10s cooldown, reduced by 1s when your attack hits an enemy." },
    ],
  },
  {
    title: "Serylda's Grudge",
    category: "PHYSICAL",
    gold: 3300,
    image: "img/Serylda's_Grudge_item_old_HD.png",
    bannedSet: ["FATALITY"],
    stats: { AD: 40, CD: 15, ARMOR_PEN_PERCENTAGE: 30 },
    passives: [
      { title: "Last Whisper", desc: "Gain 33% Armor Pen.", stats: { ARMOR_PEN_PERCENTAGE: 33 } },
      { title: "Icy", desc: "Damaging active abilities and empowered attacks slow enemies by 30% for 1s" },
      { title: "Frostbite", desc: "Apply Frostbite to enemies slowed by Icy for 6s. At 3 stacks, all stacks are consumed to apply Bleed, dealing: (5 + 1-15 (based on level) + 15% bonus AD) physical damage over 2s. Also applies 50% Grievous Wounds for 3s (5s cooldown per target)" },
    ],
  },
  {
    title: "The Collector",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/The_Collector_item_old_HD.png",
    stats: { AD: 45, CRIT: 25 },
    passives: [
      { title: "Killer", desc: "Grants +10 Armor Penetration.", stats: { ARMOR_PEN: 10 } },
      { title: "Death and Taxes", desc: "Damage that would leave an enemy champion below ( 4% + 2% CRIT ) of their max Health executes them instead; permanently increasing the max Health percentage execution threshold by 0.1% and grants 25 bonus gold." },
    ],
  },
  // NOTE: Titanic Hydra does not appear in the current Wild Rift item list (legacy icon suggests it may have been removed) — gold cost and stats below are best-effort from its last documented version.
  {
    title: "Titanic Hydra",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Titanic_Hydra_item_old_HD.png",
    stats: { AD: 40, HP: 450 },
    passives: [
      { title: "Cleave", desc: "Every 1.75 seconds, your next attack deals bonus physical damage equal to 25 plus 3% bonus Health and sends out a shockwave dealing physical damage equal to 80 plus 10% bonus Health to enemies behind the target. Ranged champions do 75% damage." },
    ],
  },
  {
    title: "Sundered Sky",
    category: "PHYSICAL",
    gold: 2900,
    image: "img/Sundered_Sky_item_HD.webp",
    stats: { AD: 40, HP: 350, CD: 15 },
    passives: [
      { title: "Lightshield Strike", desc: "Your next basic attack against a champion critically strikes for 160% damage and heals for 125% base AD plus 6% of missing Health (6s cooldown per target)." },
    ],
  },
  {
    title: "Trinity Force",
    category: "PHYSICAL",
    gold: 3333,
    image: "img/Trinity_Force_item_HD.webp",
    bannedSet: ["SPELLBLADE"],
    stats: { AD: 25, HP: 250, CD: 15, ATTACK_SPEED: 30, SPEED_PERCENTAGE: 8 },
    passives: [
      { title: "Spellblade", desc: "After using an ability, your next basic attack within 10 seconds deals bonus physical damage on-hit (2s cooldown)." },
      { title: "Quicken", desc: "Basic attacks grant a stack of bonus Move Speed for a few seconds, stacking up to 4 times." },
    ],
  },
  {
    title: "Youmuu's Ghostblade",
    category: "PHYSICAL",
    gold: 2900,
    image: "img/Youmuu's_Ghostblade_item_HD.webp",
    stats: { AD: 55, CD: 15, ARMOR_PEN: 15 },
    passives: [
      { title: "Wraith Step", desc: "Unique Active: Gain bonus Move Speed and Armor Penetration for 6 seconds (45s cooldown)." },
    ],
  },
  {
    title: "Wit's End",
    category: "PHYSICAL",
    gold: 2600,
    image: "img/Wit's_End_item_HD.webp",
    stats: { ATTACK_SPEED: 40, MR: 35 },
    passives: [
      { title: "Fray", desc: "Basic attacks deal bonus magic damage on-hit and restore Magic Resist for 4 seconds, stacking up to 4 times." },
    ],
  },
  {
    title: "Sterak's Gage",
    category: "PHYSICAL",
    gold: 2700,
    image: "img/Sterak's_Gage_item_HD.webp",
    bannedSet: ["LIFELINE"],
    stats: { AD: 45, HP: 350 },
    passives: [
      { title: "Lifeline", desc: "Taking damage that would leave you below 30% max Health grants a decaying shield and bonus Attack Damage for a few seconds (70s cooldown)." },
    ],
  },
  {
    title: "Spear of Shojin",
    category: "PHYSICAL",
    gold: 2900,
    image: "img/Spear_of_Shojin_item_HD.webp",
    stats: { AD: 40, HP: 300, CD: 15 },
    passives: [
      { title: "Vermillion Edge", desc: "Damaging an enemy champion with an ability grants a stack (up to 3, or 4 for melee) that empowers your next basic attack to deal bonus true damage on-hit." },
    ],
  },
  {
    title: "Magnetic Blaster",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Magnetic_Blaster_WR_item.webp",
    stats: { AD: 25, CRIT: 25, ATTACK_SPEED: 15, SPEED_PERCENTAGE: 5 },
    passives: [
      { title: "Power Fight", desc: "Your movement and basic attacks will generate stacks of Energy, stacking up to 100. At maximum stacks, your next basic attack will consume them all to activate all Energized effects" },
    ],
  },
  {
  title: "Serpent's Fang",
    category: "PHYSICAL",
    gold: 2800,
    image: "img/Serpent's_Fang_item.webp",
    stats: { AD: 50, CD: 10 },
    passives: [
      { title: "Stab", desc: "+15 armor pen", stats: { ARMOR_PEN: 15} },
    ],
  },
  {
    title: "Terminus",
    category: "PHYSICAL",
    gold: 3300,
    image: "img/Terminus_item.webp",
    bannedSet: ["FATALITY", "BLIGHT"],
    stats: { AD: 40, ATTACK_SPEED: 30 },
    passives: [
      {title: "Shadow", desc: "Basic attack deal 35 bonus magic damage on-hit"},
      { title: "Juxtaposition", desc: "Basic attacks On-hit icon on-hit against champions alternate between Light and Dark hits, each granting a bonus for 5 seconds that stacks up to 3 times. Light hits grant 5 − 8 (based on level) bonus armor and bonus magic resist while Dark hits grant 11% armor penetration and magic penetration, for a total of 15 − 24 (based on level) bonus resistances and 33% penetration at maximum stacks of each." },
    ],
  },
  {
    title: "Soul transfer",
    category: "PHYSICAL",
    gold: 3200,
    image: "img/Soul_Transfer.png",
    stats: { AD: 25, ATTACK_SPEED: 30, CRIT: 25 },
    passives: [
      {title: "Shadow dance", desc: "Critical strikes against a champion champion or an epic monster monster will conjure a Shadow for 4 seconds to attack nearby enemies. It inherits 20% AD and additionally gains 30% of your critical rate as attack speed. Up to two Shadows can be deployed. Shadows more than 600-range away will expire."},
    ],
  },
];
