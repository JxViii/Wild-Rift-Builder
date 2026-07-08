#include "league.hpp"
#include "token.hpp"

///////////////////////////////////////////////////////////////////////////
// OBJECT
///////////////////////////////////////////////////////////////////////////

double lol::Object::getAttribute(int type)
{
  double total = 0.0;
  for (Stat &stat : getStats())
  {
    if (stat.getType() == type)
    {
      total += stat.getValue();
    }
  }

  if (!getPassives().empty())
  {
    for (Passive &passive : getPassives())
    {
      if (passive.getStat().getValue() != 0 && passive.getStat().getType() == type)
      {
        total += passive.getStat().getValue();
      }
    }
  }

  return total;
}

std::vector<lol::Stat> lol::Object::getAttributeStats(int type)
{
  std::vector<lol::Stat> result;

  for (Stat &stat : getStats())
  {
    if (stat.getType() == type)
    {
      result.push_back(stat);
    }
  }

  for (Passive &passive : getPassives())
  {
    if (passive.getStat().getValue() != 0 && passive.getStat().getType() == type)
    {
      result.push_back(passive.getStat());
    }
  }

  return result;
}

///////////////////////////////////////////////////////////////////////////
// SET
///////////////////////////////////////////////////////////////////////////

lol::Set::Set(std::vector<lol::Object> set)
{
  if (set.size() > 6)
  {
    throw std::invalid_argument("Set is bigger than 6 items");
  }

  int activeCount = 0;
  int bootCount = 0;
  for (lol::Object &obj : set)
  {
    if (obj.getType() == ACTIVE)
      activeCount++;
    else if (obj.getType() == BOOTS)
      bootCount++;
  }
  if (activeCount > 1)
  {
    throw std::invalid_argument("You can only have ONE active item at a time!");
  }
  if (bootCount > 1)
  {
    throw std::invalid_argument("You can only have ONE boots item at a time!");
  }

  _set = set;
  _hasActive = activeCount == 1;
  _hasBoots = bootCount == 1;
  _capacity = getSize() - set.size();
}

void lol::Set::addObject(lol::Object obj)
{

  if (getCapacity() == 0)
  {
    throw std::invalid_argument("Invalid operation 'addObject', the set is already FULL!");
  }

  bool isActive = obj.getType() == ACTIVE;
  bool isBoots = obj.getType() == BOOTS;
  std::vector<int> ban = obj.getBannedSet();

  if (_hasActive == true && isActive)
  {
    throw std::invalid_argument("You can only have ONE active item at a time!");
  }

  if (_hasBoots == true && isBoots)
  {
    throw std::invalid_argument("You can only have ONE boots item at a time!");
  }

  if (ban[0] != 0)
  {
    for (std::size_t i{}; i < ban.size(); ++i)
    {
      if (isBanned(ban[i]) != -1)
      {
        throw std::invalid_argument("You can only have ONE of this items at a time! Token: " + ban[i]);
      }
      else
      {
        _banned_set.push_back(ban[i]);
      }
    }
  }

  _set.push_back(obj);
  if (isActive)
    _hasActive = true;
  if (isBoots)
    _hasBoots = true;
  _capacity--;
}
void lol::Set::deleteObject(size_t pos)
{

  if (getCapacity() == getSize())
  {
    throw std::invalid_argument("Invalid operation 'deleteObject', the set is EMPTY!");
  }

  if (pos >= getSize() - getCapacity())
  {
    throw std::invalid_argument(pos + " is out of bounds for this Set");
  }

  Object obj = _set.at(pos);
  bool isActive = obj.getType() == ACTIVE;
  bool isBoots = obj.getType() == BOOTS;
  std::vector<int> ban = obj.getBannedSet();

  if (ban[0] != 0)
  {
    for (std::size_t i{}; i < ban.size(); ++i)
    {
      int del = isBanned(ban[i]);
      _banned_set.erase(_banned_set.begin() + del);
    }
  }

  _set.erase(_set.begin() + pos);
  if (isActive)
    _hasActive = false;
  if (isBoots)
    _hasBoots = false;
  _capacity++;
}

double lol::Set::getAttribute(int type)
{
  double total = 0.0;
  for (lol::Object &obj : getSet())
  {
    total += obj.getAttribute(type);
  }
  return total;
}

double lol::Set::getPen(int type)
{
  double total = 0.0;
  for (lol::Stat &stat : getAttributeStats(type))
  {
    double x = stat.getValue();

    if (x > 0.0 && total != 0.0){
      total = lol::CUMULATIVE_PERCENT_REDUCTION(total, x) * 100;
    } else {
      total += x;
    }

  }
  total = std::round(total * 100.0) / 100.0;
  return total;
}

std::vector<lol::Stat> lol::Set::getAttributeStats(int type)
{
  std::vector<lol::Stat> result;
  for (lol::Object &obj : getSet())
  {
    std::vector<lol::Stat> objStats = obj.getAttributeStats(type);
    result.insert(result.end(), objStats.begin(), objStats.end());
  }
  return result;
}

int lol::Set::getGold()
{
  int total = 0;
  for (lol::Object &obj : getSet())
  {
    total += obj.getGold();
  }
  return total;
}

int lol::Set::isBanned(int ban)
{
  for (std::size_t i{}; i < getBannedSet().size(); ++i)
  {
    if (_banned_set[i] == ban)
    {
      return i;
    }
  }
  return -1;
}

///////////////////////////////////////////////////////////////////////////
// JSON
///////////////////////////////////////////////////////////////////////////

nlohmann::ordered_json lol::Set::print()
{

  int gold = getGold();
  double ap = getAttribute(AP);
  double cd = getAttribute(CD);
  double maxMana = getAttribute(MAX_MANA);
  double manaRegen = getAttribute(MANA_REGEN);
  double mp = getAttribute(MP);
  double mpPercentage = getPen(MP_PERCENTAGE);
  double hp = getAttribute(HP);
  double hpRegen = getAttribute(HP_REGEN);
  double speed = getAttribute(SPEED);
  double speedPercentage = getAttribute(SPEED_PERCENTAGE);
  double attackSpeed = getAttribute(ATTACK_SPEED);
  double ad = getAttribute(AD);
  double armorPen = getAttribute(ARMOR_PEN);
  double armorPenPercentage = getPen(ARMOR_PEN_PERCENTAGE);
  double crit = getAttribute(CRIT);
  double armor = getAttribute(ARMOR);
  double mr = getAttribute(MR);
  double heal = getAttribute(HEAL);
  double omnivamp = getAttribute(OMNIVAMP);
  double magicVamp = getAttribute(MAGIC_VAMP);
  double physicalVamp = getAttribute(PHYSICAL_VAMP);
  double apPercentage = getAttribute(AP_PERCENTAGE);
  double adPercentage = getAttribute(AD_PERCENTAGE);
  std::vector<lol::Stat> adaptativeStats = getAttributeStats(ADAPTATIVE);
  double mana_ad = getAttribute(MANA_AD);
  double mana_ap = getAttribute(MANA_AP);
  double mana_hp = getAttribute(MANA_HP);
  double hp_ap = getAttribute(HP_AP);
  double hp_ad = getAttribute(HP_AD);
  double tenacity = getAttribute(TENACITY);

  //! Fuerza Adaptable: cada fuente se resuelve con su propio ratio AD ( ej. Nashor 50/0.5, otros 20/0.6 ),
  //! pero todas usan la MISMA comparación AP vs AD (los totales antes de sumar Fuerza Adaptable).

  double baseAp = ap;
  double baseAd = ad;
  for (lol::Stat &stat : adaptativeStats)
  {
    if (baseAp > baseAd)
      ap += stat.getValue();
    else
      ad += stat.getValue() * stat.getAdaptativeRatio();
  }

  //! Estadísticas que escalan por MANA MAX

  ap += maxMana * mana_ap / 100;
  ad += maxMana * mana_ad / 100;
  hp += maxMana * mana_hp / 100;

  //! Estadísticas que escalan por HP

  ap += hp * hp_ap / 100;
  ad += hp * hp_ad / 100;

  //! Porcentajes de %AP y %AD sobre el total ( ej. RABADON )

  ap *= (apPercentage != 0) ? (1 + apPercentage / 100) : 1;
  ad *= (adPercentage != 0) ? (1 + adPercentage / 100) : 1;

  nlohmann::ordered_json result = nlohmann::ordered_json::object();

  result["Gold"] = gold;
  if (ap != 0)
    result["AP"] = (int)ap;
  if (cd != 0)
    result["CD"] = cd;
  if (maxMana != 0)
    result["Max Mana"] = maxMana;
  if (manaRegen != 0)
    result["Mana Regen"] = manaRegen;
  if (mp != 0)
    result["Magic Pen"] = mp;
  if (mpPercentage != 0)
    result["Magic Pen%"] = mpPercentage;
  if (hp != 0)
    result["HP"] = hp;
  if (hpRegen != 0)
    result["HP Regen"] = hpRegen;
  if (speed != 0)
    result["Speed"] = speed;
  if (speedPercentage != 0)
    result["Speed%"] = speedPercentage;
  if (attackSpeed != 0)
    result["Attack Speed"] = attackSpeed;
  if (ad != 0)
    result["AD"] = (int)ad;
  if (armorPen != 0)
    result["Armor Pen"] = armorPen;
  if (armorPenPercentage != 0)
    result["Armor Pen%"] = armorPenPercentage;
  if (crit != 0)
    result["Crit"] = crit;
  if (armor != 0)
    result["Armor"] = armor;
  if (mr != 0)
    result["MR"] = mr;
  if (heal != 0)
    result["Heal"] = heal;
  if (omnivamp != 0)
    result["Omnivamp"] = omnivamp;
  if (magicVamp != 0)
    result["Magic Vamp"] = magicVamp;
  if (physicalVamp != 0)
    result["Physical Vamp"] = physicalVamp;
  if (tenacity != 0)
    result["Tenacity"] = tenacity;

  return result;
}


///////////////////////////////////////////////////////////////////////////
// ABILITY
///////////////////////////////////////////////////////////////////////////

