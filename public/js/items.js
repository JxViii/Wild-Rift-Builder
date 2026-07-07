// Full item catalog — readable stat keys (see statTypes.js for the name -> type mapping).
// Values are sourced from Wild Rift where confirmed; entries marked NOTE fall back to PC League of Legends data
// (either because the Wild Rift-specific numbers couldn't be confirmed, or the item may not exist in Wild Rift at all).
const ITEMS = [
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
    title: "Rabadon's Deathcap",
    category: "MAGIC",
    gold: 3400,
    image: "img/Rabadon's_Deathcap_item_HD.png",
    stats: { AP: 100, MP_PERCENTAGE: 7 },
    passives: [
      { title: "Magical Opus", desc: "Increases Ability Power by 20-45%. (We emulate 45%)", stats: { AP_PERCENTAGE: 45 } },
    ],
  },
  {
    title: "Luden's Tempest",
    category: "MAGIC",
    gold: 2900,
    image: "img/Luden's_Tempest_item_HD.png",
    stats: { AP: 85, MAX_MANA: 300, CD: 20, MP_PERCENTAGE: 7},
    passives: [
      { title: "Energy Charge", desc: "Damaging an enemy with an ability deals bonus magic damage 110 + 10%AP." },
    ],
  },
  {
    title: "Liandry's Torment",
    category: "MAGIC",
    gold: 3000,
    image: "img/Liandry's_Torment_item_HD.png",
    stats: { AP: 75, HP: 250, MP_PERCENTAGE: 7 },
    passives: [
      { title: "Torment", desc: "Damaging abilities burn enemies, dealing bonus magic damage over time 0.6% - 3.0% of the targets max HP as bonus magic damage per second for 3 seconds" },
    ],
  },
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
  {
    title: "Nashor's Tooth",
    category: "MAGIC",
    gold: 2800,
    image: "img/Nashor's_Tooth_item_HD.png",
    stats: { ATTACK_SPEED: 45, CD: 20 },
    passives: [
      { title: "Magic Fang", desc: "Obtain 25 AD or 50 AP" , stats: { ADAPTATIVE : 50 }},
      { title: "Icathian Bite", desc: "Basic attacks deal bonus magic damage on-hit (15 AP + 20% Bonus AD + 30% Bonus AP)." },
    ],
  },
  {
    title: "Mercury's Treads",
    category: "BOOTS",
    gold: 1100,
    image: "img/Mercury's_Treads_item_HD.png",
    stats: { MR: 25, SPEED: 45 },
    passives: [
      { title: "Tenacity", desc: "Reduces the duration of stuns, slows, taunts, and other disables." },
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
    gold: 2950,
    image: "img/Archangel's_Staff_item_HD.png",
    bannedSet: ["LIFELINE","MANAFLOW"],
    stats: { AP: 35, MAX_MANA: 500, CD: 20, MP_PERCENTAGE: 7 },
    passives: [
      { title: "Awe", desc: "Grants Ability Power equal to 1% of max Mana and refunds 25% of all Mana spent." },
      { title: "Mana Charge", desc: "Increases max Mana by 18 every time Mana is spent, up to 3 times every 10 seconds. Caps at 700 bonus Mana, transforming the item into Seraph's Embrace." },
    ],
  },
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
  // NOTE: Armored Advance appears to be a Midlane Quest upgrade item from PC League of Legends, not confirmed to exist in Wild Rift; stats/gold uncertain, verify.
  {
    title: "Armored Advance",
    category: "BOOTS",
    gold: 1400,
    image: "img/Armored_Advance_item_HD.png",
    stats: { ARMOR: 40, SPEED: 50 },
    passives: [
      { title: "Plating", desc: "Reduces incoming damage from basic attacks by 12% (excludes turret attacks)." },
      { title: "Noxian Endurance", desc: "Taking physical damage from champions grants a shield that absorbs physical damage for 4 seconds (12 second cooldown)." },
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
    title: "Banshee's Veil",
    category: "MAGIC",
    gold: 3000,
    image: "img/Banshee's_Veil_item_HD.png",
    stats: { AP: 70, MR: 40, CD: 10 },
    passives: [
      { title: "Annul", desc: "Grants a spell shield that blocks the next enemy ability." },
    ],
  },
  {
    title: "Berserker's Greaves",
    category: "BOOTS",
    gold: 1400,
    image: "img/Berserker's_Greaves_item_HD.png",
    stats: { AD: 15, ATTACK_SPEED: 30, SPEED: 45 },
  },
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
  // NOTE: Blackfire Torch is an AAA ARAM-exclusive item; exact stats/gold uncertain, verify in-game.
  {
    title: "Blackfire Torch",
    category: "MAGIC",
    gold: 2900,
    image: "img/Blackfire_Torch_item_HD.png",
    stats: { AP: 70, CD: 15 },
    passives: [
      { title: "Ignite", desc: "AAA ARAM exclusive item — damaging abilities apply a burning effect that spreads to nearby enemies." },
    ],
  },
  {
    title: "Blade of the Ruined King",
    category: "PHYSICAL",
    gold: 3200,
    image: "img/Blade_of_the_Ruined_King_item_HD.png",
    stats: { AD: 30, ATTACK_SPEED: 30, OMNIVAMP: 10 },
    passives: [
      { title: "Ruined Strikes", desc: "Basic attacks deal 9% of target's current Health as bonus physical damage (minimum 15, capped at 60 vs. monsters)." },
      { title: "Drain", desc: "Hitting a champion with 3 basic attacks or abilities deals bonus magic damage and steals 25% of their Move Speed for 3 seconds (60 second cooldown)." },
    ],
  },
  // NOTE: Bloodletter's Curse stats taken from PC League of Legends data; Wild Rift numbers may differ slightly, verify.
  {
    title: "Bloodletter's Curse",
    category: "MAGIC",
    gold: 2900,
    image: "img/Bloodletter's_Curse_item_HD.png",
    bannedSet: ["BLIGHT"],
    stats: { AP: 65, HP: 400, CD: 15 },
    passives: [
      { title: "Vile Decay", desc: "Dealing magic damage to champions with abilities reduces their Magic Resist by 7.5% for 6 seconds, stacking up to 4 times." },
    ],
  },
  // NOTE: Chainlaced Crushers appears to be a Midlane Quest upgrade item from PC League of Legends, not confirmed to exist in Wild Rift; stats/gold uncertain, verify.
  {
    title: "Chainlaced Crushers",
    category: "BOOTS",
    gold: 1250,
    image: "img/Chainlaced_Crushers_item_HD.png",
    stats: { MR: 30, SPEED: 45 },
    passives: [
      { title: "Tenacious Guard", desc: "Grants 30% Tenacity. Taking magic damage from champions grants a shield that absorbs magic damage for 5 seconds (15 second cooldown)." },
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
    title: "Cosmic Drive",
    category: "MAGIC",
    gold: 2800,
    image: "img/Cosmic_Drive_item_HD.png",
    stats: { AP: 70, CD: 30, HP: 300, MP_PERCENTAGE: 7 },
    passives: [
      { title: "Spelldance", desc: "Dealing damage with abilities grants bonus Move Speed (scaling with Ability Haste) for 4 seconds." },
    ],
  },
  // NOTE: Crimson Lucidity appears to be a Midlane Quest boots upgrade from PC League of Legends, not confirmed to exist in Wild Rift; stats/gold uncertain, verify.
  {
    title: "Crimson Lucidity",
    category: "BOOTS",
    gold: 900,
    image: "img/Crimson_Lucidity_item_HD.png",
    stats: { CD: 20, SPEED: 45 },
    passives: [
      { title: "Ionian Insight", desc: "Grants 20 Summoner Spell Haste." },
      { title: "Noxian Haste", desc: "Healing, shielding, or buffing an ally, damaging enemy champions with abilities, or using a Summoner Spell grants bonus Move Speed for 4 seconds." },
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
      { title: "Blooming", desc: "When an enemy dies within 3 seconds of you damaging them, a healing nova spawns at their location for your team (60 second cooldown)." },
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
  // NOTE: gold/stats sourced from PC League of Legends data — could not confirm this item exists in Wild Rift under current patches; verify before relying on it.
  {
    title: "Dusk and Dawn",
    category: "MAGIC",
    gold: 3100,
    image: "img/Dusk_and_Dawn_item_HD.png",
    bannedSet: ["SPELLBLADE"],
    stats: { HP: 300, AP: 70, CD: 20, ATTACK_SPEED: 25 },
    passives: [
      { title: "Spellblade", desc: "After using an ability, your next basic attack within 10 seconds deals bonus magic damage on-hit and applies on-hit effects twice (1.5s cooldown)." },
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
    gold: 3150,
    image: "img/Edge_of_Night_item_HD.png",
    stats: { AD: 50, HP: 250, ARMOR_PEN: 8 },
    passives: [
      { title: "Gouge", desc: "+8 Armor Penetration." },
      { title: "Annul", desc: "Grants a spell shield that blocks the next enemy ability." },
    ],
  },
  {
    title: "Essence Reaver",
    category: "PHYSICAL",
    gold: 3050,
    image: "img/Essence_Reaver_item_HD.png",
    bannedSet: ["SPELLBLADE"],
    stats: { AD: 40, CRIT: 25, CD: 20 },
    passives: [
      { title: "Essence Flare", desc: "Damaging active abilities deal bonus physical damage scaled by Critical Strike Chance. Each ability can only trigger this once per target." },
      { title: "Mana Siphon", desc: "Attacks restore missing Mana on-hit." },
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
    stats: { AP: 45, HEAL: 5, MANA_REGEN: 50, HP: 150, CD: 20 },
    passives: [
      { title: "Redemption", desc: "Select a big area and after 2.5s it summons a lighting that heals allies and damages enemy champions" },
    ],
  },
  {
    title: "Gluttonous Greaves",
    category: "BOOTS",
    gold: 1400,
    image: "img/Gluttonous_Greaves_item_HD.png",
    stats: { SPEED: 45, OMNIVAMP: 7 },
    passives: [
      { title: "Conversion", desc: "+7% Omnivamp." },
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
  // NOTE: could not confirm this item exists in Wild Rift under this name — gold/stats are the PC League of Legends version; verify before relying on it.
  {
    title: "Gunmetal Greaves",
    category: "BOOTS",
    gold: 1850,
    image: "img/Gunmetal_Greaves_item_HD.png",
    stats: { ATTACK_SPEED: 40, SPEED: 50 },
    passives: [
      { title: "Noxian Gait", desc: "Basic attacks against champions grant bonus Move Speed decaying over 2 seconds." },
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
    title: "Hextech Rocketbelt",
    category: "ACTIVE",
    gold: 2700,
    image: "img/Hextech_Rocketbelt_item_HD.png",
    stats: { AP: 70, HP: 250, CD: 20 },
    passives: [
      { title: "Supersonic", desc: "Unique Active: Dash a short distance in the target direction, unleashing an arc of rockets that deal magic damage to enemies hit, then gain bonus Move Speed while facing nearby enemy champions (40s cooldown)." },
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
    title: "Horizon Focus",
    category: "MAGIC",
    gold: 3100,
    image: "img/Horizon_Focus_item_HD.png",
    stats: { AP: 90, CD: 20 },
    passives: [
      { title: "Hypershot", desc: "Damaging an enemy champion with an ability from far away reveals them for 6 seconds and increases damage dealt to them by 12%." },
      { title: "Focus", desc: "When Hypershot triggers, it reveals all enemy champions near the target for 2 seconds (15s cooldown)." },
    ],
  },
  // NOTE: gold/stats sourced from PC League of Legends data; this item is noted as exclusive to a PC-only game mode (Hextech ARAM) and may not exist in Wild Rift at all — verify before relying on it.
  {
    title: "Hubris",
    category: "PHYSICAL",
    gold: 3150,
    image: "img/Hubris_item_HD.png",
    stats: { AD: 65, CD: 15, ARMOR_PEN: 18 },
    passives: [
      { title: "Eminence", desc: "Scoring a champion takedown shortly after damaging them grants a permanent stack of bonus Attack Damage, up to a limit, decaying after 70 seconds without a takedown." },
    ],
  },
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
    title: "Immortal Path",
    category: "BOOTS",
    gold: 950,
    image: "img/Immortal_Path_item_HD.png",
    stats: { SPEED: 45, OMNIVAMP: 4 },
    passives: [
      { title: "Slay", desc: "Gain 1% omnivamp for each takedown on enemy champions, up to 6% at 6 takedowns." },
      { title: "Now and Forever", desc: "While above 50% health, deal increased damage. While below 50% health, gain increased healing, shielding, and health regen." },
    ],
  },
  {
    title: "Immortal Shieldbow",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Immortal_Shieldbow_item_HD.png",
    stats: { AD: 40, ATTACK_SPEED: 15, CRIT: 25, OMNIVAMP: 5 },
    passives: [
      { title: "Lifeline", desc: "If damage would reduce you below 35% max health, gain a shield that absorbs damage based on critical strike chance (90s cooldown). Also grants bonus Physical Vamp briefly." },
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
    title: "Ionian Boots of Lucidity",
    category: "BOOTS",
    gold: 900,
    image: "img/Ionian_Boots_of_Lucidity_item_HD.png",
    stats: { SPEED: 45, CD: 15 },
    passives: [
      { title: "Summoned", desc: "Reduces summoner spell cooldowns by 10%." },
      { title: "Sprint", desc: "Active: increases movement speed for a few seconds, removed on taking or dealing damage to champions." },
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
  {
    title: "Lich Bane",
    category: "MAGIC",
    gold: 2950,
    image: "img/Lich_Bane_item_HD.png",
    bannedSet: ["SPELLBLADE"],
    stats: { AP: 80, CD: 10 },
    passives: [
      { title: "Spellblade", desc: "After using an ability, your next basic attack within 10 seconds deals bonus magic damage on-hit (scales with AD and AP)." },
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
    title: "Malignance",
    category: "MAGIC",
    gold: 2900,
    image: "img/Malignance_item_HD.png",
    stats: { AP: 95, MAX_MANA: 600, CD: 25 },
    passives: [
      { title: "Hatefog", desc: "Ultimate ability damage against champions scorches the ground, burning enemies within for magic damage over time and reducing their magic resist." },
    ],
  },
  {
    title: "Manamune",
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
      { title: "Lifeline", desc: "If magic damage would reduce you below 35% max health, gain a shield that absorbs magic damage (90s cooldown)." },
      { title: "Lifegrip", desc: "Triggering Lifeline grants bonus attack damage, Physical Vamp, and Magic Vamp until out of combat." },
    ],
  },
  {
    title: "Mejai's Soulstealer",
    category: "MAGIC",
    gold: 1800,
    image: "img/Mejai's_Soulstealer_item_HD.png",
    stats: { AP: 30, HP: 100 },
    passives: [
      { title: "Glory", desc: "Generate stacks for champion kills and assists, up to 30. Lose stacks on death." },
      { title: "Fear", desc: "Gain bonus AP per stack of Glory, and bonus move speed at 10+ stacks." },
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
    gold: 2300,
    image: "img/Mikael's_Blessing_item_HD.png",
    stats: { HP: 400, MANA_REGEN: 100, HEAL: 15, CD: 15 },
    passives: [
      { title: "Harmony", desc: "Gain bonus base health regen for every additional base mana regen." },
      { title: "Purify", desc: "Active: removes all crowd control debuffs from an ally champion and restores health." },
    ],
  },
  {
    title: "Morellonomicon",
    category: "MAGIC",
    gold: 3000,
    image: "img/Morellonomicon_item_HD.png",
    stats: { AP: 65, HP: 150 },
    passives: [
      { title: "Affliction", desc: "Dealing magic damage to enemy champions inflicts Grievous Wounds, reducing incoming healing." },
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
    title: "Muramana",
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
      { title: "Tyranny", desc: "Gain bonus Attack Damage equal to 2.5% of bonus Health." },
      { title: "Retribution", desc: "Gain increased Attack Damage the more missing health you have, up to 9%." },
    ],
  },
  {
    title: "Phantom Dancer",
    category: "PHYSICAL",
    gold: 3000,
    image: "img/Phantom_Dancer_item_HD.png",
    stats: { AD: 25, CRIT: 25, ATTACK_SPEED: 30 },
    passives: [
      { title: "Shadowalk", desc: "Grants +5% bonus Move Speed." },
      { title: "Spectral Waltz", desc: "Basic attacks grant 7% bonus Move Speed and a stack for 3 seconds, stacking up to 4 times for 25% bonus Attack Speed at max stacks." },
    ],
  },
  {
    title: "Plated Steelcaps",
    category: "BOOTS",
    gold: 1350,
    image: "img/Plated_Steelcaps_item_HD.png",
    stats: { SPEED: 45, ARMOR: 35 },
    passives: [
      { title: "Block", desc: "Reduces incoming physical damage from basic attacks by 15%." },
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
    title: "Riftmaker",
    category: "MAGIC",
    gold: 3300,
    image: "img/Riftmaker_item_Unused_HD.png",
    stats: { HP: 150, AP: 90, CD: 15, OMNIVAMP: 12, MP_PERCENTAGE: 15 },
    passives: [
      { title: "Assimilation", desc: "Grants +12% Omnivamp." },
      { title: "Void Corruption", desc: "Gain a stack of Corruption every second in combat with champions, increasing damage dealt; at max stacks the bonus damage becomes true damage." },
    ],
  },
  {
    title: "Rylai's Crystal Scepter",
    category: "MAGIC",
    gold: 2700,
    image: "img/Rylai's_Crystal_Scepter_item_Unused_HD.png",
    stats: { HP: 350, AP: 70 },
    passives: [
      { title: "Icy", desc: "Damaging abilities and empowered attacks slow enemies by 20% for 1 second." },
    ],
  },
  {
    title: "Serylda's Grudge",
    category: "PHYSICAL",
    gold: 3100,
    image: "img/Serylda's_Grudge_item_old_HD.png",
    bannedSet: ["FATALITY"],
    stats: { AD: 40, CD: 15, ARMOR_PEN_PERCENTAGE: 30 },
    passives: [
      { title: "Last Whisper", desc: "Damaging active abilities and empowered attacks slow enemies by 30% for 1 second." },
      { title: "Icy", desc: "Grants 16-30% Armor Penetration (scales with level)." },
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
    title: "Spirit Visage",
    category: "DEFENSE",
    gold: 2900,
    image: "img/Spirit_Visage_item_Unused_HD.png",
    stats: { HP: 350, MR: 45, CD: 10, HEAL: 30 },
    passives: [
      { title: "Blessed", desc: "Increases all healing, regen, shields, and drain effects on yourself by 30%." },
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
    title: "The Collector",
    category: "PHYSICAL",
    gold: 2900,
    image: "img/The_Collector_item_old_HD.png",
    stats: { AD: 40, CRIT: 25, ARMOR_PEN: 10 },
    passives: [
      { title: "Killer", desc: "Grants +10 Armor Penetration." },
      { title: "Death and Taxes", desc: "Damage that would leave an enemy champion below 5% max Health executes them instead; champion kills grant an additional 25 gold." },
    ],
  },
  // NOTE: Titanic Hydra does not appear in the current Wild Rift item list (legacy icon suggests it may have been removed) — gold cost and stats below are best-effort from its last documented version.
  {
    title: "Titanic Hydra",
    category: "PHYSICAL",
    gold: 3300,
    image: "img/Titanic_Hydra_item_old_HD.png",
    stats: { AD: 40, HP: 450 },
    passives: [
      { title: "Cleave", desc: "Every 2.5 seconds, your next attack deals bonus physical damage based on max Health and sends out a shockwave dealing physical damage to enemies behind the target." },
      { title: "Colossus", desc: "Gain Attack Damage equal to 5 + 2.5% of bonus Health." },
    ],
  },
  // NOTE: Void Staff has reportedly been removed from Wild Rift (legacy icon, "old2" suffix) — included with its last known stats for reference.
  {
    title: "Void Staff",
    category: "MAGIC",
    gold: 2800,
    image: "img/Void_Staff_item_old2_HD.png",
    bannedSet: ["BLIGHT"],
    stats: { AP: 70, MP_PERCENTAGE: 40 },
    passives: [
      { title: "Dissolve", desc: "Grants +40% Magic Penetration." },
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
  // NOTE: PC League of Legends data (no confirmed Wild Rift version). Magic Pen scales 10-20 with target's missing health; 15 used as a flat approximation.
  {
    title: "Shadowflame",
    category: "MAGIC",
    gold: 3000,
    image: "img/Shadowflame_item_HD.webp",
    stats: { AP: 100, HP: 200, MP: 15 },
    passives: [
      { title: "Cinderbloom", desc: "Magic damage and true damage critically strike (dealing 120-130% damage) enemies below 35% max health. Limited to 1 per player." },
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
  // NOTE: PC League of Legends data (no confirmed Wild Rift version).
  {
    title: "Stormsurge",
    category: "MAGIC",
    gold: 3000,
    image: "img/Stormsurge_item_HD.webp",
    stats: { AP: 100, SPEED_PERCENTAGE: 5, MP: 10 },
    passives: [
      { title: "Stormraider", desc: "Dealing damage equal to 35% of an enemy champion's max health within 2.5 seconds inflicts Squall and grants 25% bonus Move Speed for 2 seconds (30s cooldown)." },
      { title: "Squall", desc: "After 2 seconds, strike the Squall target with lightning for bonus magic damage; if they die first, the lightning instead shocks all nearby enemy champions and grants gold." },
    ],
  },
  {
    title: "Sundered Sky",
    category: "PHYSICAL",
    gold: 3100,
    image: "img/Sundered_Sky_item_HD.webp",
    stats: { AD: 45, HP: 400, CD: 10 },
    passives: [
      { title: "Lightshield Strike", desc: "Your next basic attack against a champion critically strikes for 175% damage and heals for 140% base AD plus 6% of missing Health (6s cooldown per target); excess healing becomes temporary bonus Health, stacking up to 5 times." },
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
    title: "Zhonya's Hourglass",
    category: "ACTIVE",
    gold: 3300,
    image: "img/Zhonya's_Hourglass_item_HD.webp",
    stats: { AP: 110, ARMOR: 40 },
    passives: [
      { title: "Stasis", desc: "Unique Active: Become invulnerable and untargetable for 2.5 seconds, but unable to act (90s cooldown)." },
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
      { title: "Lifeline", desc: "Taking damage that would leave you below 30% max Health grants a decaying shield and bonus Attack Damage for a few seconds (90s cooldown)." },
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
    title: "Sorcerer's Shoes",
    category: "BOOTS",
    gold: 1100,
    image: "img/Sorcerer's_Shoes_item_HD.webp",
    stats: { SPEED: 45, MP_PERCENTAGE: 18 },
    passives: [],
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
  {
    title: "Road of ages",
    category: "MAGIC",
    gold: 2800,
    image: "img/ROA.png",
    stats: { HP: 250, AP: 60, MP_PERCENTAGE: 7, MAX_MANA: 300 },
    passives: [
      {title: "Eternity", desc: "Restore mana equal to 15% of incoming damage from champions, and Attack speed icon heal for an amount equal to 20% of mana spent, up to 25 per cast; toggle abilities can only heal for up to 25 per second."},
      {title: "Veterancy", desc: "This item gains 25 bonus health, 10 bonus mana and 6 ability power every 40 seconds, stacking up to 10 times for a maximum of 250 bonus health, 100 bonus mana and 60 ability power."},
    ],
  },
  {
    title: "Oceanic's Trydent",
    category: "MAGIC",
    gold: 2600,
    image: "img/Oceanid_Tridents.png",
    stats: { HP: 200, AP: 70, CD: 20 },
    passives: [
      {title: "Lethal Weapon", desc: "Dealing ability damage to an enemy champion afflicts them for 3 seconds, reducing their active shields as well as any others they gain. Single-target abilities inflict 40% (+ 5% per 100 AP) reduction, capped at 60%. Area-of-effect abilities inflict 25% (+ 5% per 100 AP) reduction, capped at 45%."},
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
    title: "Harmonic Echo",
    category: "SUPPORT",
    gold: 2600,
    image: "img/Harmonic_Echo.png",
    stats: { HP: 100, AP: 50, MAX_MANA: 300, MANA_REGEN: 50, CD: 10, HEAL: 8},
    passives: [
      {title: "Harmonic Echo", desc: "Moving and casting abilities builds Harmony. At 100 Harmony, your next healing or shielding ability cast on an ally restores more health scaling with 20% AP, if the target has less than 30% HP the effect is increased to 150%"},
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

/*
#define EMPTY 0
#define AP 1
#define CD 2
#define MAX_MANA 3
#define MANA_REGEN 4
#define MP 5
#define MP_PERCENTAGE 6
#define HP 7
#define HP_REGEN 8
#define SPEED 9
#define SPEED_PERCENTAGE 10
#define ATTACK_SPEED 11
#define AD 12
#define ARMOR_PEN 13
#define ARMOR_PEN_PERCENTAGE 14
#define CRIT 15
#define ARMOR 16
#define MR 17
#define HEAL 18
#define OMNIVAMP 19
#define AP_PERCENTAGE 20
#define AD_PERCENTAGE 21

#define PHYSICAL 30
#define MAGIC 31
#define DEFENSE 32
#define SUPPORT 33
#define ACTIVE 34
#define BOOTS 35
*/

/*


PHYSICAL:
    RUNANS x
    MAGNETIC BLASTER x
    SERPENT FANG x
    TERMINUS x
    SOUL TRANSFER

MAGIC:
  ROA
  OCEANIDS TRIDENT


DEFENSE:
  WARMOG
  THORNMAIL
  RANDUIN
  DAWNSHROUD
  AMARANTH TWINGUARD
  MANTLE OF THE TWELFTH HOUR
  SEARING CROWN
  
SUPPORT:
  YORDLE TRAP
  ARMONIC ECHO

BOOTS:
  GLUTTENOUS GREAVES
  BOOTS OF DYNAMISM

  LETHALITY !
  ATTACK SPEED !
  AP !



ACTIVE:
  STRIDEBREAKER
  REDEMPTION

*/
