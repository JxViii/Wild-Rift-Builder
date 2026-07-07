// Mirrors token.hpp. Keep in sync with the C++ backend's #define values.
const STAT_TYPES = {
  AP: 1,
  CD: 2,
  MAX_MANA: 3,
  MANA_REGEN: 4,
  MP: 5,
  MP_PERCENTAGE: 6,
  HP: 7,
  HP_REGEN: 8,
  SPEED: 9,
  SPEED_PERCENTAGE: 10,
  ATTACK_SPEED: 11,
  AD: 12,
  ARMOR_PEN: 13,
  ARMOR_PEN_PERCENTAGE: 14,
  CRIT: 15,
  ARMOR: 16,
  MR: 17,
  HEAL: 18,
  OMNIVAMP: 19,
  AP_PERCENTAGE: 20,
  AD_PERCENTAGE: 21,
  ADAPTATIVE: 22,
  MANA_AD: 23,
  MANA_AP: 24,
  MANA_HP: 25,
  HP_AP: 26,
  HP_AD: 27,
  TENACITY: 28,
  PHYSICAL_VAMP: 29,
  MAGIC_VAMP: 101,
};

// Mirrors token.hpp's item category #defines.
const ITEM_TYPES = {
  PHYSICAL: 30,
  MAGIC: 31,
  DEFENSE: 32,
  SUPPORT: 33,
  ACTIVE: 34,
  BOOTS: 35,
};

// Mirrors token.hpp's restriction-tag #defines. Items sharing one of these
// tags can't coexist in the same set (enforced by lol::Set on the backend).
const BANNED_SET_TYPES = {
  SPELLBLADE: 40,
  FATALITY: 41,
  LIFELINE: 42,
  MANAFLOW: 43,
  BLIGHT: 44,
  SPELLSHIELD: 45,
  BURN: 46,
  ROA: 50,
  SERAPH: 51,
  MANAMUNE: 52,
  WINTER: 53,
};

// Turns ["SPELLBLADE", "LIFELINE"] into [40, 42]; defaults to [0] (no tags).
function bannedSetToTypeArray(readableBannedSet) {
  if (!readableBannedSet || readableBannedSet.length === 0) {
    return [0];
  }

  return readableBannedSet.map((name) => {
    const type = BANNED_SET_TYPES[name];
    if (type === undefined) {
      throw new Error(`Unknown banned set tag "${name}"`);
    }

    return type;
  });
}

/*
  ? HOW DO WE COMPUTE ADAPTATIVE VALUES:
    ! WILD RIFT FUNCTIONING:
      * BONUS AP > BONUS AD : +AP (full value)
      * VICEVERSA            : +AD (value * ratio)

  Most ADAPTATIVE sources use the default 0.5 AD ratio (e.g. Nashor's Tooth:
  50 -> 25 AD or 50 AP), so plain `{ ADAPTATIVE: 50 }` is enough. Some items
  use a different ratio (e.g. "12 AD or 20 AP" is a 0.6 ratio) — for those,
  write the value as `{ ADAPTATIVE: { value: 20, ratio: 0.6 } }`.
*/

// Turns a readable stat value into a { type, value[, adaptative] } entry.
// `value` is either a plain number, or (for a custom Adaptive Force ratio)
// an object shaped like { value, ratio }.
function toStatEntry(name, value) {
  const type = STAT_TYPES[name];
  if (type === undefined) {
    throw new Error(`Unknown stat name "${name}"`);
  }

  if (value !== null && typeof value === "object") {
    const entry = { type, value: value.value };
    if (value.ratio !== undefined) {
      entry.adaptative = value.ratio;
    }
    return entry;
  }

  return { type, value };
}

// Turns { AD: 60, AP: 40 } into [{ type: 12, value: 60 }, { type: 1, value: 40 }]
function statsToTypeArray(readableStats) {
  return Object.entries(readableStats).map(([name, value]) => toStatEntry(name, value));
}

// The backend's Passive class carries at most one bonus Stat, so only the
// first entry of a passive's readable `stats` object (if any) is used.
function passivesToJson(passives) {
  return (passives || []).map((passive) => {
    const entries = Object.entries(passive.stats || {});
    const json = { title: passive.title, desc: passive.desc };

    if (entries.length > 0) {
      const [name, value] = entries[0];
      json.stat = toStatEntry(name, value);
    }

    return json;
  });
}
