
const ability = {
  type: STAT_TYPES["AP"],
  base: 185,
  scaling: 85,
};

const dummy = {
  HP: 1200,
  R: 116,
  reduction: 20,
}

// return {
//   HP: toStatEntry("HP", dummy.HP),
//   R: toStatEntry("MR", dummy.R),
//   reduction: dummy.reduction
// }


// return {
//   type = ability.type,
//   base = ability.base,
//   scaling = ability.scaling,
// }


// return {
//   gold: item.gold,
//   type: ITEM_TYPES[item.category],
//   title: item.title,
//   banned_set: bannedSetToTypeArray(item.bannedSet),
//   stats,
//   passives: passivesToJson(item.passives),
// };