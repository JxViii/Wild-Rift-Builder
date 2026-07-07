#include "league.hpp"
#include "token.hpp"

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
    for( std::size_t i{}; i < ban.size(); ++i){
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
    for( std::size_t i{}; i < ban.size(); ++i){
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

nlohmann::ordered_json lol::Set::print()
{

  int gold = getGold();
  double ap = getAttribute(AP);
  double cd = getAttribute(CD);
  double maxMana = getAttribute(MAX_MANA);
  double manaRegen = getAttribute(MANA_REGEN);
  double mp = getAttribute(MP);
  double mpPercentage = getAttribute(MP_PERCENTAGE);
  double hp = getAttribute(HP);
  double hpRegen = getAttribute(HP_REGEN);
  double speed = getAttribute(SPEED);
  double speedPercentage = getAttribute(SPEED_PERCENTAGE);
  double attackSpeed = getAttribute(ATTACK_SPEED);
  double ad = getAttribute(AD);
  double armorPen = getAttribute(ARMOR_PEN);
  double armorPenPercentage = getAttribute(ARMOR_PEN_PERCENTAGE);
  double crit = getAttribute(CRIT);
  double armor = getAttribute(ARMOR);
  double mr = getAttribute(MR);
  double heal = getAttribute(HEAL);
  double omnivamp = getAttribute(OMNIVAMP);
  double apPercentage = getAttribute(AP_PERCENTAGE);
  double adPercentage = getAttribute(AD_PERCENTAGE);
  double adaptative = getAttribute(ADAPTATIVE);

  ap *= (apPercentage != 0) ? (1 + apPercentage / 100) : 1;
  ad *= (adPercentage != 0) ? (1 + adPercentage / 100) : 1;

  if (adaptative != 0)
  {
    if (ap >= ad)
      ap += adaptative;
    else
      ad += adaptative * 0.5;
  }

  nlohmann::ordered_json result = nlohmann::ordered_json::object();

  result["Gold"] = gold;
  if (ap != 0)
    result["AP"] = ap;
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
    result["AD"] = ad;
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
  if (apPercentage != 0)
    result["AP%"] = apPercentage;
  if (adPercentage != 0)
    result["AD%"] = adPercentage;

  return result;
}
