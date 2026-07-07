// Full item catalog — assembled from per-category files (public/js/items/*.js).
// Values are sourced from Wild Rift where confirmed; entries marked NOTE fall back to PC League of Legends data
// (either because the Wild Rift-specific numbers couldn't be confirmed, or the item may not exist in Wild Rift at all).
// See statTypes.js for the stat/category/bannedSet name -> token mapping.
const ITEMS = [
  ...PHYSICAL_ITEMS,
  ...MAGIC_ITEMS,
  ...DEFENSE_ITEMS,
  ...SUPPORT_ITEMS,
  ...ACTIVE_ITEMS,
  ...BOOTS_ITEMS,
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
