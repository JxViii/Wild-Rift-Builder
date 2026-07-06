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

// Turns { AD: 60, AP: 40 } into [{ type: 12, value: 60 }, { type: 1, value: 40 }]
function statsToTypeArray(readableStats) {
  return Object.entries(readableStats).map(([name, value]) => {
    const type = STAT_TYPES[name];
    if (type === undefined) {
      throw new Error(`Unknown stat name "${name}"`);
    }
    return { type, value };
  });
}

// The backend's Passive class carries at most one bonus Stat, so only the
// first entry of a passive's readable `stats` object (if any) is used.
function passivesToJson(passives) {
  return (passives || []).map((passive) => {
    const entries = Object.entries(passive.stats || {});
    const json = { title: passive.title, desc: passive.desc };

    if (entries.length > 0) {
      const [name, value] = entries[0];
      const type = STAT_TYPES[name];
      if (type === undefined) {
        throw new Error(`Unknown stat name "${name}"`);
      }
      json.stat = { type, value };
    }

    return json;
  });
}
