
// ! Twisted fate values

const AD_SCALE = {
  11: 77,
  12: 80,
  13: 83,
  14: 86,
  15: 90,
}

let AD = AD_SCALE[13];

const Q = {
  type: STAT_TYPES["AP"],
  base: 240,
  scaling: 70
}

const blue = {
  type: STAT_TYPES["AP"],
  base: 115 + AD,
  scaling: 75
}

const red = {
  type: STAT_TYPES["AP"],
  base: 90 + AD,
  scaling: 60
}

const yellow = {
  type: STAT_TYPES["AP"],
  base: 45 + AD,
  scaling: 50
}

const E = {
  type: STAT_TYPES["AP"],
  base: 80,
  scaling: 45
}

const liche = {
  type: STAT_TYPES["AP"],
  base: AD * 0.75,
  scaling: 45
}

const nashor = {
  type: STAT_TYPES["AP"],
  base: 15,
  scaling: 30
}