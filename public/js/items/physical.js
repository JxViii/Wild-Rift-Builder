// Physical items — part of the ITEMS catalog (see items.js).
const PHYSICAL_ITEMS = [
  {
    title: "Infinity Edge",
    category: "PHYSICAL",
    gold: 3500,
    image: "img/Infinity_Edge_item_HD.png",
    stats: { AD: 75, CRIT: 25 },
    passives: [
      { title: "Infinity", desc: "Critical Strikes deal 230% damage instead of the 200% base Critical Strike Damage." },
    ],
  },
  {
    title: "Bloodthirster",
    category: "PHYSICAL",
    gold: 3200,
    stats: { AD: 75, LIFESTEAL: 15 },
    image: "img/Bloodthirster_item_HD.png",
    passives: [
      { title: "Ichorshield", desc: "Convert overhealing from your Lifesteal into a shield, up to 165 - 345 (based on level)." },
    ],
  },
  {
    title: "Kraken Slayer",
    category: "PHYSICAL",
    gold: 2900,
    image: "img/Kraken_Slayer_item_HD.png",
    stats: { AD: 45, ATTACK_SPEED: 35 },
    passives: [
      { title: "Cloud Stride", desc: "+4% Movement Speed", stats: { SPEED_PERCENTAGE: 4 }},
      { title: "Bring It Down", desc: "Every third attack deals 150 - 210 bonus physical damage, or 120 - 168 for ranged champions. This damage is increased based on the target's missing Health: for every 1% Health the target is missing, damage increases by 0.75%, up to 75%." },
    ],
  },
  {
    title: "Death's Dance",
    category: "PHYSICAL",
    gold: 3200,
    image: "img/Death's_Dance_item_HD.png",
    stats: { AD: 50, ARMOR: 45, CD: 15 },
    passives: [
      { title: "Defy", desc: "If a champion you damaged within the last 3 seconds dies, the remaining Ignore Pain damage is cleansed, and you heal over 2 seconds for an amount equal to 90% bonus Attack Damage."},
      { title: "Cauterize", desc: "Store 30% of physical and magic damage taken, or 12% for ranged champions, and take the stored amount as true damage over 3 seconds." },
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
    gold: 3100,
    image: "img/Blade_of_the_Ruined_King_item_HD.png",
    stats: { AD: 40, ATTACK_SPEED: 30, LIFESTEAL: 12 },
    passives: [
      { title: "Ruined Strike", desc: "Basic attacks deal bonus physical damage on-hit equal to 7% of the target's current Health (8.5% for melee), with a minimum of 15 and a maximum of 100 against monsters." },
      { title: "Drain", desc: "Hitting the same enemy champion 3 times with basic attacks or abilities slows them by 30% for 1.5 seconds (30 second cooldown)." },
    ],
  },
  {
    title: "Chempunk Chainsword",
    category: "PHYSICAL",
    gold: 2800,
    image: "img/Chempunk_Chainsword_item_HD.png",
    stats: { AD: 45, HP: 250, CD: 15 },
    passives: [
      { title: "Sepsis", desc: "Dealing physical damage to enemy champions inflicts 50% Grievous Wounds for 3 seconds." },
    ],
  },
  {
    title: "Runaan's Hurricane",
    category: "PHYSICAL",
    gold: 2650,
    image: "img/Runans.png",
    stats: { CRIT: 25, ATTACK_SPEED: 40, SPEED_PERCENTAGE: 4 },
    passives: [
      { title: "Wind's Fury", desc: "Basic attacks fire mini bolts at 2 nearby targets on-hit, each dealing 55% physical damage. These bolts can crit and apply on-hit effects." },
    ],
  },
  {
    title: "Divine Sunderer",
    category: "PHYSICAL",
    gold: 3400,
    image: "img/Divine_Sunderer_item_HD.png",
    bannedSet: ["SPELLBLADE"],
    stats: { HP: 425, AD: 25, CD: 25 },
    passives: [
      { title: "Spellblade", desc: "After using an ability, your next basic attack within 10 seconds deals bonus physical damage on-hit equal to (Melee 10% / Ranged 7%) target's maximum health, with a minimum damage equal to 125% base AD and a maximum damage against monsters equal to 225% base AD (1.5 (post-effect) second cooldown). Against champions, you also heal for (Melee 7% / Ranged 3%) target's maximum health, with a minimum heal equal to (Melee 90% / Ranged 50%) base AD." },
    ],
  },
  {
    title: "Duskblade of Draktharr",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Duskblade_of_Draktharr_item_HD.png",
    stats: { AD: 55, CD: 10},
    passives: [
      { title: "Razor", desc: "+18 Armor Penetration.", stats: {ARMOR_PEN: 18}},
      { title: "Nightstalker", desc: "Your next basic attack against an enemy champion deals 60-160 bonus physical damage and slows them heavily for 0,35s (10s cooldown). Scoring a takedown resets the cooldown." },
    ],
  },
  {
    title: "Eclipse",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Eclipse_item_HD.png",
    stats: { AD: 65, CD: 20 },
    passives: [
      { title: "Ever Rising Moon", desc: "Hitting an enemy champion inflicts a stack (max one per attack/cast per champion, lasting 1.8s). At 2 stacks, they're consumed to deal bonus physical damage equal to 7% of the target's max health (3,5% for rangeds) and grant you a shield equal to (Melee 160 / Ranged 80) (+ (Melee 40% / Ranged 20%) bonus AD) lasting 2 seconds (6 second cooldown)." },
    ],
  },
  {
    title: "Edge of Night",
    category: "PHYSICAL",
    gold: 3150,
    image: "img/Edge_of_Night_item_HD.png",
    bannedSet: ["SPELLSHIELD"],
    stats: { AD: 50, HP: 250 },
    passives: [
      { title: "Gouge", desc: "+12 Armor Penetration.", stats: {ARMOR_PEN: 12} },
      { title: "Annul", desc: "Grants a spell shield that blocks the next enemy ability (35s de enfriamiento)."},
    ],
  },
  {
    title: "Essence Reaver",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Essence_Reaver_item_HD.png",
    bannedSet: ["SPELLBLADE"],
    stats: { AD: 50, CRIT: 25, CD: 20 },
    passives: [
      { title: "Spellblade", desc: "After casting an ability, your next basic attack within 10 seconds deals bonus physical damage equal to 135% x base Attack Damage + 0 - 80 (based on Critical Rate) and restores Mana equal to 50% of the damage dealt. (1.5 second cooldown)" },
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
      { title: "Hexcharged", desc: "Grants bonus 20 Ultimate Haste." },
      { title: "Overdrive", desc: "Upon casting your ultimate ability, enter Overdrive to gain (Melee 40% /Ranged 20%) bonus attack speed and (Melee 20% /Ranged 10%) bonus movement speed for 8 seconds (30 second cooldown, starts on ultimate cast)." },
    ],
  },
  {
    title: "Guinsoo's Rageblade",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Guinsoo's_Rageblade_item_HD.png",
    stats: { AD: 35, AP: 30, ATTACK_SPEED: 30 },
    passives: [
      { title: "Wrath", desc: "Attacks deal 30 bonus magic damage." },
      { title: "Seething Strike", desc: "Basic attacks grant 8% Attack Speed, stacking up to 4 times. At max stacks, every 3rd basic attack triggers an additional on-hit effect." },
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
    stats: { AD: 40, HP: 400 },
    passives: [
      {title: "Set Sail", desc: "+5% movement speed", stats: {SPEED_PERCENTAGE: 5}},
      { title: "Boarding Party", desc: "Nearby allied siege and super minions gain 20~130 Armor and 10~120 Magic Resist (25% if you are a ranged champion)" },
      { title: "Skipper", desc: "Every 4th attack against champions and epic monsters deals bonus physical damage equal to 160% base Attack Damage + 5% max Health (ranged champions deal 40% of the damage), increased to 240% Attack Damage + 9% Max Health Bonus as Physical Damage against structures (ranged champions deal 40% of the damage)." },
    ],
  },
  {
    title: "Immortal Shieldbow",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Immortal_Shieldbow.png",
    bannedSet: ["LIFELINE"],
    stats: { AD: 55, CRIT: 25 },
    passives: [
      { title: "Lifeline", desc: "When you take damage that would reduce you to below 35% Health, gain a shield for 3 seconds (Melee 350-650 / Ranged 300-550, based on champion level). (70 second cooldown)" },
    ],
  },
  {
    title: "Lord Dominik's Regards",
    category: "PHYSICAL",
    gold: 3300,
    image: "img/Lord_Dominik's_Regards_item_HD.png",
    bannedSet: ["FATALITY"],
    stats: { AD: 35, CRIT: 25, ARMOR_PEN_PERCENTAGE: 35 },
    passives: [
      { title: "Giant Slayer", desc: "Deal increased damage against champions based on their bonus health, max 12% bonus damage when enemy chmapion has 1200 bonus health." },
    ],
  },
  {
    title: "Manamune",
    category: "PHYSICAL",
    gold: 2900,
    image: "img/Manamune_item_HD.png",
    bannedSet: ["MANAFLOW"],
    stats: { AD: 40, MAX_MANA: 500, CD: 15 },
    passives: [
      { title: "Awe", desc: "Gain Attack Damage equal to 2% of max Mana and refund 15% of total Mana spent.", stats: { MANA_AD : 2 } },
      { title: "Mana Charge", desc: "Basic attacks and Mana expenditure grant 14 max Mana, up to 700. Triggers at most 3 times every 10 seconds." },
    ],
    stack: {
      stats: { MAX_MANA: 1 },
      min: "0",
      max: "700",
      title: "Muramana",
      img: "img/Muramana_item_HD.png",
      passives: [{ title: "Shock", desc: "Basic attacks deal bonus physical damage equal to 1.5% of max Mana; abilities deal bonus physical damage equal to 3.5% / 3% of max Mana for melee / ranged." }],
      delete: "Mana Charge"
    }
  },
  {
    title: "Maw of Malmortius",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Maw_of_Malmortius_item_HD.png",
    bannedSet: ["LIFELINE"],
    stats: { AD: 55, MR: 45, CD: 10 },
    passives: [
      { title: "Lifeline", desc: "If magic damage would reduce you below 35% max health, gain a shield that absorbs 220-530 magic damage (90s cooldown)." },
    ],
  },
  {
    title: "Mortal Reminder",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Mortal_Reminder_item_HD.png",
    bannedSet: ["FATALITY"],
    stats: { AD: 35, CRIT: 25, ARMOR_PEN_PERCENTAGE: 30 },
    passives: [
      { title: "Sepsis", desc: "Physical damage dealt to enemy champions applies 50% Grievous Wounds for 3 seconds." },
    ],
  },
  // {
  //   title: "(Mana2) Muramana",
  //   category: "PHYSICAL",
  //   gold: 2700,
  //   image: "img/Muramana_item_HD.png",
  //   bannedSet: ["MANAFLOW"],
  //   stats: { AD: 25, MAX_MANA: 1000, CD: 20 },
  //   passives: [
  //     { title: "Awe", desc: "Grants Attack Damage equal to 2% of max Mana and refunds 15% of all Mana spent." },
  //     { title: "Shock", desc: "Attacks against champions consume 2.5% of current Mana to deal that amount as bonus physical damage. Skills against champions consume 4% of current Mana to deal that amount as bonus physical damage + 6% Attack Damage. Only active while above 20% max Mana." },
  //   ],
  // },
  {
    title: "Navori Quickblades",
    category: "PHYSICAL",
    gold: 2650,
    image: "img/Navori_Quickblades_WR_item.webp",
    stats: { ATTACK_SPEED: 40, CRIT: 25, SPEED_PERCENTAGE: 4 },
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
      { title: "Tyranny", desc: "Gain bonus Attack Damage equal to 2.5% of bonus Health.", stats: {HP_AD: 2.5}},
      { title: "Retribution", desc: "Gain increased Attack Damage the more missing health you have, up to 9%. Max retribution reached at 30% Health" },
    ],
  },
  {
    title: "Phantom Dancer",
    category: "PHYSICAL",
    gold: 2650,
    image: "img/Phantom_Dancer_item_HD.png",
    stats: { CRIT: 25, ATTACK_SPEED: 40 },
    passives: [
      { title: "Shadowalk", desc: "Grants +7% bonus Move Speed.", stats: {SPEED_PERCENTAGE: 7} },
      { title: "Spectral Waltz", desc: "Landing a basic attack on a champion grants 6% Attack Speed and 1% Movement Speed for 6 seconds, stacking up to 5 times." },
    ],
  },
  {
    title: "Serylda's Grudge",
    category: "PHYSICAL",
    gold: 3100,
    image: "img/Serylda's_Grudge_item_old_HD.png",
    bannedSet: ["FATALITY"],
    stats: { AD: 50, CD: 15, ARMOR_PEN_PERCENTAGE: 35 },
    passives: [
      { title: "Icy", desc: "Damaging active abilities and empowered attacks slow enemies below 60% current Health by 30% Movement Speed for 1 second." },
    ],
  },
  {
    title: "The Collector",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/The_Collector_item_old_HD.png",
    stats: { AD: 50, CRIT: 25 },
    passives: [
      { title: "Killer", desc: "Grants +10 Armor Penetration.", stats: {ARMOR_PEN: 10} },
      { title: "Death and Taxes", desc: "If you deal damage to an enemy champion and leave them below 5% of their max Health, they are executed, permanently increasing the execute threshold by 0.1% of max Health and granting an additional 25 gold." },
    ],
  },
  // NOTE: 7.3 only changed the build path (Pickaxe + Jaurim's Fist + Ruby Crystal + 500); stats/passive are unchanged.
  {
    title: "Titanic Hydra",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Titanic_Hydra_item_old_HD.png",
    stats: { AD: 40, HP: 450 },
    passives: [
      { title: "Cleave", desc: "Every 1.75 seconds, your next attack deals bonus physical damage equal to 25 + 3% Bonus Health (Also applies to towers) and sends out a shockwave dealing physical damage equal to 80 + 10% Bonus Health to enemies behind the target. (75% for rangeds)." },
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
    stats: { AD: 36, HP: 333, CD: 15, ATTACK_SPEED: 30 },
    passives: [
      { title: "Spellblade", desc: "After using an ability, your next basic attack within 10 seconds deals 200% Base Ad physical damage on-hit (1.5s cooldown)." },
      { title: "Valor", desc: "Basic attacks grant a stack of 20 bonus Move Speed for a few seconds (50% for rangeds). It doesnt stack." },
    ],
  },
  {
    title: "Youmuu's Ghostblade",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Youmuu's_Ghostblade_item_HD.webp",
    stats: { AD: 55, CD: 15, SPEED_PERCENTAGE: 4 },
    passives: [
      { title: "Slice", desc: "+ 15 Armor Penetration", stats: {ARMOR_PEN: 15}},
      { title: "Momentum", desc: "3 seconds after combat with enemy champions ends, gain 30 bonus Movement Speed, or 20 for ranged champions." },
    ],
  },
  {
    title: "Wit's End",
    category: "PHYSICAL",
    gold: 2800,
    image: "img/Wit's_End_item_HD.webp",
    stats: { ATTACK_SPEED: 50, MR: 45, TENACITY: 20 },
    passives: [
      { title: "At Wit's End", desc: "Basic attacks deal 40 bonus magic damage on-hit." },
    ],
  },
  {
    title: "Sterak's Gage",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Sterak's_Gage_item_HD.webp",
    bannedSet: ["LIFELINE"],
    stats: { HP: 400, TENACITY: 20 },
    passives: [
      { title: "Heavy Handed", desc: "Gain bonus attack damage equal to 50% base AD."},
      { title: "Lifeline", desc: "Taking damage that would leave you below 35% max Health grants a 75% Bonus Health decaying shield and bonus Attack Damage for 5 seconds (90s cooldown)." },
      { title: "Sterak's Fury", desc: "Triggering Lifeline will increase size for 8 seconds."}
    ],
  },
  {
    title: "Spear of Shojin",
    category: "PHYSICAL",
    gold: 3100,
    image: "img/Spear_of_Shojin_item_HD.webp",
    stats: { AD: 40, HP: 450 },
    passives: [
      { title: "Dragonforce", desc: "Gain 20 Basic ability haste"},
      { title: "Vermillion Edge", desc: "Dealing damage to a monster or an enemy champion with abilities increases your champion's ability pasive damage by 3% for 6s. (Stacks 4 times)" },
    ],
  },
  // REMOVED in patch 7.3: its effects were redistributed across Stormrazor, Rapid Firecannon and Statikk Shiv.
  // {
  // title: "Magnetic Blaster",
  // category: "PHYSICAL",
  // gold: 3000,
  // image: "img/Magnetic_Blaster_WR_item.webp",
  // stats: { AD: 30, CRIT: 25, ATTACK_SPEED: 25 },
  // passives: [
  // { title: "Fervor", desc: "+ 5% Movement Speed.", stats: {SPEED_PERCENTAGE: 5}},
  // { title: "Energized", desc: "Moving and attacking will generate an Energized Attack."},
  // { title: "Power Blitz", desc: "Energized Attacks gain 100 range (50 range for melee attacks), deal 40-100 bonus magic damage, and grant 60 Movement Speed for 0.75s. This Damage bounces up to 5 enemies and can Critically Strike. (Deals 50% - 80% damage against minions.)" },
  // ],
  // },
  {
  title: "Serpent's Fang",
    category: "PHYSICAL",
    gold: 2800,
    image: "img/Serpent's_Fang_item.webp",
    stats: { AD: 50, CD: 10 },
    passives: [
      { title: "Stab", desc: "+15 armor pen", stats: { ARMOR_PEN: 15} },
      { title: "Shield Reaver", desc: "Dealing damage to an enemy champion afflicts them for 3 seconds, reducing their active shields strength as well as any others they gain. Melee champions inflict 40% (+ 10% bonus AD) reduction, capped at 60%. Ranged role Ranged champions inflict 25% (+ 10% bonus AD) reduction, capped at 45%." },
    ],
  },
  {
    title: "Terminus",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Terminus_item.webp",
    bannedSet: ["FATALITY", "BLIGHT"],
    stats: { AD: 35, ATTACK_SPEED: 35 },
    passives: [
      {title: "Shadow", desc: "Basic attacks deal 30 bonus magic damage on-hit."},
      { title: "Juxtaposition", desc: "Basic attacks on-hit against champions alternate between Light and Dark hits, each granting a bonus that stacks up to 3 times. The Light effect grants 5 - 8 (based on level) Armor and Magic Resist; the Dark effect grants 10% Armor Penetration and Magic Penetration." },
    ],
  },
  // REMOVED in patch 7.3: it never found its intended audience.
  // {
  // title: "Soul transfer",
  // category: "PHYSICAL",
  // gold: 3200,
  // image: "img/Soul_Transfer.png",
  // stats: { AD: 25, ATTACK_SPEED: 30, CRIT: 25 },
  // passives: [
  // {title: "Shadow dance", desc: "Critical strikes against a champion champion or an epic monster monster will conjure a Shadow for 4 seconds to attack nearby enemies. It inherits 20% AD and additionally gains 30% of your critical rate as attack speed. Up to two Shadows can be deployed. Shadows more than 600-range away will expire."},
  // ],
  // },
  {
    title: "Hexoptics C44",
    category: "PHYSICAL",
    gold: 2900,
    image: "img/Hexoptics_C44.webp",
    stats: { AD: 55, CRIT: 25 },
    passives: [
      {title: "Magnification", desc: "Attacks deal 0 - 10% bonus damage based on how far away the enemy is, reaching maximum damage at 550 units."},
      {title: "Arcane Aim", desc: "When a champion you damaged within the last 3 seconds dies, you gain 100 bonus Attack Range for 8 seconds."},
    ],
  },
  {
    title: "Yun Tal Wildarrows",
    category: "PHYSICAL",
    gold: 3100,
    image: "img/Yun_Tal.webp",
    stats: { AD: 50, ATTACK_SPEED: 25 },
    passives: [
      {title: "Practice Makes Perfect", desc: "Basic attacks permanently grant Critical Rate, gaining 0.4% / 0.2% (melee / ranged) Critical Rate per attack, up to a maximum of 25%."},
      {title: "Flurry", desc: "Attacking an enemy champion grants 25% Attack Speed for 6 seconds (20 second cooldown). Attacks reduce this cooldown by 1 second, and this reduction increases to 2 seconds on a critical strike."},
    ],
  },
  {
    title: "Stormrazor",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Stormrazor.webp",
    stats: { AD: 50, ATTACK_SPEED: 20, CRIT: 25 },
    passives: [
      {title: "Energized", desc: "Moving and attacking generate an Energized attack."},
      {title: "Bolt", desc: "Your Energized attack deals 120 bonus magic damage and grants 45% Movement Speed for 1.5 seconds."},
    ],
  },
  {
    title: "Rapid Firecannon",
    category: "PHYSICAL",
    gold: 2650,
    image: "img/Rapid_Firecannon.webp",
    stats: { CRIT: 25, ATTACK_SPEED: 40, SPEED_PERCENTAGE: 4 },
    passives: [
      {title: "Energized", desc: "Moving and attacking generate an Energized attack."},
      {title: "Sharpshooter", desc: "Your Energized attack deals 80 bonus magic damage and grants 35% bonus Attack Range, up to 150."},
    ],
  },
  {
    title: "Fiendhunter Bolts",
    category: "PHYSICAL",
    gold: 2650,
    image: "img/Fiendhunter_Bolts.webp",
    stats: { CRIT: 25, ATTACK_SPEED: 45, SPEED_PERCENTAGE: 4 },
    passives: [
      {title: "Night Vigil", desc: "Gain 20 Ultimate ability haste."},
      {title: "Opening Barrage", desc: "After casting your ultimate ability, your next 3 attacks gain 50% Attack Speed and are guaranteed to crit, dealing 80% of your normal critical strike damage for 8 seconds. If an attack would already crit, it instead deals 15% bonus true damage. (45 second cooldown)"},
    ],
  },
  {
    title: "Statikk Shiv",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Statikk_Shiv.webp",
    stats: { AD: 40, AP: 40, ATTACK_SPEED: 30, SPEED_PERCENTAGE: 4 },
    passives: [
      {title: "Energized", desc: "Moving and attacking generate an Energized attack."},
      {title: "Electrospark", desc: "Your Energized attack fires chain lightning that bounces to additional targets. Bounce count: 3 / 4 / 5 / 6, increasing at levels 1 / 5 / 9 / 13, dealing 60 magic damage, increased to 90 against minions and monsters. Applies on-hit effects to secondary bounce targets."},
      {title: "ElectroShock", desc: "Basic attacks grant 5 bonus Energized stacks."},
    ],
  },
];