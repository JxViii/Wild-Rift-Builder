// Full item catalog — readable stat keys (see statTypes.js for the name -> type mapping).
// Values are sourced from Wild Rift where confirmed; entries marked NOTE fall back to PC League of Legends data
// (either because the Wild Rift-specific numbers couldn't be confirmed, or the item may not exist in Wild Rift at all).
const ITEMS = [
  {
    title: "Infinity Edge",
    category: "PHYSICAL",
    gold: 3200,
    image: "img/Infinity_Edge_item_HD.png",
    stats: { AD: 70, CRIT: 25 },
    passives: [
      { title: "Perfection", desc: "If you have at least 60% Critical Strike Chance, gain +40% Critical Strike Damage." },
    ],
  },
  {
    title: "Bloodthirster",
    category: "PHYSICAL",
    gold: 3200,
    image: "img/Bloodthirster_item_HD.png",
    stats: { AD: 65, OMNIVAMP: 18 },
    passives: [
      { title: "Overheal", desc: "Excess healing from Life Steal is converted into a shield." },
    ],
  },
  {
    title: "Kraken Slayer",
    category: "PHYSICAL",
    gold: 3200,
    image: "img/Kraken_Slayer_item_HD.png",
    stats: { AD: 65, ATTACK_SPEED: 40 },
    passives: [
      { title: "Bring It Down", desc: "Every third basic attack deals bonus true damage." },
    ],
  },
  {
    title: "Rabadon's Deathcap",
    category: "MAGIC",
    gold: 3200,
    image: "img/Rabadon's_Deathcap_item_HD.png",
    stats: { AP: 120 },
    passives: [
      { title: "Magical Opus", desc: "Increases Ability Power by 35%.", stats: { AP_PERCENTAGE: 35 } },
    ],
  },
  {
    title: "Luden's Tempest",
    category: "MAGIC",
    gold: 3000,
    image: "img/Luden's_Tempest_item_HD.png",
    stats: { AP: 80, MANA_REGEN: 8, SPEED: 8 },
    passives: [
      { title: "Energy Charge", desc: "Damaging an enemy with an ability deals bonus magic damage and grants a burst of Move Speed." },
    ],
  },
  {
    title: "Liandry's Torment",
    category: "MAGIC",
    gold: 3000,
    image: "img/Liandry's_Torment_item_HD.png",
    stats: { AP: 70, HP: 300 },
    passives: [
      { title: "Torment", desc: "Damaging abilities burn enemies, dealing bonus magic damage over time increased vs. crowd controlled targets." },
    ],
  },
  {
    title: "Guardian Angel",
    category: "DEFENSE",
    gold: 3000,
    image: "img/Guardian_Angel_item_HD.png",
    stats: { AD: 40, ARMOR: 50 },
    passives: [
      { title: "Rebirth", desc: "Upon taking lethal damage, restore health and stasis briefly instead of dying (once per bind time)." },
    ],
  },
  {
    title: "Force of Nature",
    category: "DEFENSE",
    gold: 3000,
    image: "img/Force_of_Nature_item_HD.png",
    stats: { MR: 60, HP: 350, SPEED_PERCENTAGE: 5 },
    passives: [
      { title: "Absorb", desc: "Taking magic damage grants stacking Move Speed and, at max stacks, bonus Health regen." },
    ],
  },
  {
    title: "Frozen Heart",
    category: "DEFENSE",
    gold: 2400,
    image: "img/Frozen_Heart_item_HD.png",
    stats: { ARMOR: 70, MAX_MANA: 400 },
    passives: [
      { title: "Rime", desc: "Reduces the Attack Speed of nearby enemies." },
    ],
  },
  {
    title: "Death's Dance",
    category: "PHYSICAL",
    gold: 3200,
    image: "img/Death's_Dance_item_HD.png",
    stats: { AD: 55, ARMOR: 45 },
    passives: [
      { title: "Ignore Pain", desc: "Defers a portion of damage taken as a burning DoT instead of losing it all at once." },
    ],
  },
  {
    title: "Nashor's Tooth",
    category: "MAGIC",
    gold: 3000,
    image: "img/Nashor's_Tooth_item_HD.png",
    stats: { AP: 80, ATTACK_SPEED: 50, MANA_REGEN: 10 },
    passives: [
      { title: "Icathian Bite", desc: "Basic attacks deal bonus magic damage on-hit." },
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
    gold: 2800,
    image: "img/Abyssal_Mask_item_HD.png",
    stats: { HP: 300, MAX_MANA: 300, MR: 40, CD: 10 },
    passives: [
      { title: "Eternity", desc: "Restore Mana equal to 15% of damage taken from champions. Restore Health equal to 20% of Mana spent, capped at 25 Health per cast." },
      { title: "Abyssal", desc: "Taking magic damage generates charges equal to 20% of the damage taken (lasting 5 seconds). Rooting an enemy champion consumes charges to cause a 400-yard explosion near the first rooted target, dealing magic damage equal to the remaining charges." },
    ],
  },
  // NOTE: Actualizer is an AAA ARAM-exclusive item; stats/gold uncertain, verify in-game.
  {
    title: "Actualizer",
    category: "MAGIC",
    gold: 2200,
    image: "img/Actualizer_item_HD.png",
    stats: { AP: 60, MAX_MANA: 300, CD: 10 },
    passives: [
      { title: "Mana Burst", desc: "AAA ARAM exclusive item that grants a burst window for mages built around mana and ability usage." },
    ],
  },
  {
    title: "Archangel's Staff",
    category: "MAGIC",
    gold: 2950,
    image: "img/Archangel's_Staff_item_HD.png",
    stats: { AP: 35, MAX_MANA: 500, CD: 20 },
    passives: [
      { title: "Awe", desc: "Grants Ability Power equal to 1% of max Mana and refunds 25% of all Mana spent." },
      { title: "Mana Charge", desc: "Increases max Mana by 12 every time Mana is spent, up to 3 times every 12 seconds. Caps at 700 bonus Mana, transforming the item into Seraph's Embrace." },
    ],
  },
  {
    title: "Ardent Censer",
    category: "SUPPORT",
    gold: 2800,
    image: "img/Ardent_Censer_item_HD.png",
    stats: { AP: 60, HP: 250, CD: 10 },
    passives: [
      { title: "Ardent", desc: "Grants +5% Move Speed." },
      { title: "Censer", desc: "Healing or shielding an allied champion (excluding yourself) grants both of you bonus Attack Speed and your basic attacks deal bonus magic damage for 6 seconds." },
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
  {
    title: "Axiom Arc",
    category: "PHYSICAL",
    gold: 2600,
    image: "img/Axiom_Arc_item_HD.png",
    stats: { AD: 55, ARMOR_PEN: 18, CD: 20 },
    passives: [
      { title: "Flux", desc: "Takedowns on champions refund a portion of your Ultimate's cooldown." },
    ],
  },
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
    gold: 2500,
    image: "img/Chempunk_Chainsword_item_HD.png",
    stats: { AD: 40, HP: 250 },
    passives: [
      { title: "Wound", desc: "Dealing physical damage to champions applies Grievous Wounds for 3 seconds, reducing healing received." },
    ],
  },
  {
    title: "Cosmic Drive",
    category: "MAGIC",
    gold: 2800,
    image: "img/Cosmic_Drive_item_HD.png",
    stats: { AP: 70, CD: 30, MP_PERCENTAGE: 7 },
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
  {
    title: "Crown of the Shattered Queen",
    category: "MAGIC",
    gold: 3000,
    image: "img/Crown_of_the_Shattered_Queen_item_HD.png",
    stats: { AP: 60, MAX_MANA: 200, CD: 20, MP_PERCENTAGE: 7 },
    passives: [
      { title: "Safeguard", desc: "Grants a spell shield that blocks the next hostile ability." },
      { title: "Poise", desc: "While Safeguard is not on cooldown, gain 20 Ability Power; damaging active abilities against champions reduce Safeguard's remaining cooldown." },
    ],
  },
  {
    title: "Cryptbloom",
    category: "MAGIC",
    gold: 3000,
    image: "img/Cryptbloom_item_HD.png",
    stats: { AP: 75, CD: 20, MP_PERCENTAGE: 30 },
    passives: [
      { title: "Blooming", desc: "When an enemy dies within 3 seconds of you damaging them, a healing nova spawns at their location for your team (60 second cooldown)." },
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
    gold: 1500,
    image: "img/Gargoyle_Stoneplate_item_HD.png",
    stats: {},
    passives: [
      { title: "Fortify", desc: "Grants a shield that absorbs 30% of maximum Health, decaying over 4 seconds. If 3 or more enemies are nearby, the shield value increases by 100%. Damage dealt is reduced by 40% for 4 seconds (45s cooldown)." },
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
    title: "Goredrinker",
    category: "ACTIVE",
    gold: 3300,
    image: "img/Goredrinker_item_HD.png",
    stats: { AD: 45, HP: 400, CD: 15 },
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
    category: "PHYSICAL",
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
    gold: 2650,
    image: "img/Hextech_Rocketbelt_item_HD.png",
    stats: { AP: 70, HP: 300, CD: 20 },
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
    category: "DEFENSE",
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
    stats: { AP: 80, CD: 10 },
    passives: [
      { title: "Spellblade", desc: "After using an ability, your next basic attack within 10 seconds deals bonus magic damage on-hit (scales with AD and AP)." },
    ],
  },
  {
    title: "Locket of the Iron Solari",
    category: "ACTIVE",
    gold: 2200,
    image: "img/Locket_of_the_Iron_Solari_item_HD.png",
    stats: { HP: 200, ARMOR: 30, MR: 30, CD: 10 },
    passives: [
      { title: "Consecrate", desc: "Grants nearby allied champions bonus armor and magic resist." },
      { title: "Devotion", desc: "Active: shields you and nearby allies, decaying over a few seconds (90s cooldown)." },
    ],
  },
  {
    title: "Lord Dominik's Regards",
    category: "PHYSICAL",
    gold: 3300,
    image: "img/Lord_Dominik's_Regards_item_HD.png",
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
    stats: { AD: 40, MR: 40, OMNIVAMP: 10 },
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
    gold: 2200,
    image: "img/Shurelya's_Battlesong_item_Unused_HD.png",
    stats: { AP: 55, CD: 15, MANA_REGEN: 125, SPEED_PERCENTAGE: 8 },
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
    gold: 3000,
    image: "img/Zhonya's_Hourglass_item_HD.webp",
    stats: { AP: 65, ARMOR: 45, CD: 10 },
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
];
