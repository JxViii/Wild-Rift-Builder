#ifndef LEAGUE_HPP
#define LEAGUE_HPP

#include <vector>
#include <string>
#include <iostream>
#include <cmath>
#include "third_party/json.hpp"
#include "token.hpp"

namespace lol
{
  class Stat
  {

  private:
    //! In case an stat is adaptative we stored the ratio between AD -> AP. Ex. 12 AD / 20 AD is a 0.6 RATIO

    int _type;
    double _value;
    double _adaptative;

  public:
    Stat() : _type(0), _value(0), _adaptative(0.5) {}
    Stat(int type, double value) : _type(type), _value(value), _adaptative(0.5) {}
    Stat(int type, double value, double adaptative)
    {

      if (type != ADAPTATIVE)
      {
        throw std::invalid_argument("You can't have an adaptative ratio without being the ADAPTATIVE stat, token: " + type);
      }

      _type = type;
      _value = value;
      _adaptative = adaptative;
    }

    const int getType() const { return _type; }
    double getValue() { return _value; }
    double getAdaptativeRatio() { return _adaptative; }
  };

  class Passive
  {

  private:
    std::string _title;
    std::string _desc;
    lol::Stat _stat;

  public:
    Passive(std::string title, std::string desc, lol::Stat stat) : _title(title), _desc(desc), _stat(stat) {}

    Passive(std::string title, std::string desc) : _title(title), _desc(desc), _stat() {}

    const std::string getTitle() const { return _title; };
    const std::string getDesc() const { return _desc; };
    lol::Stat getStat() { return _stat; };
  };

  class Object
  {

  private:
    std::vector<int> _banned_set;
    int _gold;
    int _type;
    std::string _title;
    std::vector<lol::Stat> _stats;
    std::vector<lol::Passive> _passives;

  public:
    Object(std::vector<int> banned_set, int gold, int type, std::string title, std::vector<lol::Stat> stats, std::vector<lol::Passive> passives) : _banned_set(banned_set), _gold(gold), _type(type), _title(title), _stats(stats), _passives(passives) {}

    Object(int gold, int type, std::string title, std::vector<lol::Stat> stats, std::vector<lol::Passive> passives) : _banned_set({0}), _gold(gold), _type(type), _title(title), _stats(stats), _passives(passives) {}

    Object(int gold, int type, std::string title, std::vector<lol::Stat> stats) : _banned_set({0}), _gold(gold), _type(type), _title(title), _stats(stats), _passives() {}

    std::vector<int> getBannedSet() { return _banned_set; };
    int getType() { return _type; };
    int getGold() { return _gold; };
    std::string getTitle() { return _title; };
    std::vector<lol::Stat> getStats() { return _stats; };
    std::vector<lol::Passive> getPassives() { return _passives; };

    double getAttribute(int type);
    std::vector<lol::Stat> getAttributeStats(int type);
  };

  class Set
  {

  private:
    bool _hasActive = false;
    bool _hasBoots = false;
    std::vector<int> _banned_set;
    std::vector<lol::Object> _set;
    std::size_t _capacity;

  public:
    Set(std::vector<lol::Object> set);

    std::vector<int> getBannedSet() { return _banned_set; };
    std::size_t getSize() { return 6; };
    std::size_t getCapacity() { return _capacity; };
    std::vector<lol::Object> getSet() { return _set; };

    int isBanned(std::vector<int> ban);
    int isBanned(int ban);
    void addObject(lol::Object obj);
    void deleteObject(size_t pos);
    double getAttribute(int type);
    double getPen(int type);
    std::vector<lol::Stat> getAttributeStats(int type);
    int getGold();
    nlohmann::ordered_json print();

    friend bool isAlreadyBanned(lol::Set);
  };

  ///////////////////////////////////////////////////////////////////////////
  // ABILITY
  ///////////////////////////////////////////////////////////////////////////

  class Ability
  {

  private:
    //? 100 + 20% AP,
    int _type;                      // AD / AP
    int _base;                      // 100 base
    double _scaling;                // + %type
    double _penetration_percentage; // %type pen

  public:
    int getType() { return _type; };
    int getBaseDamage() { return _base; };
    double getScalingPercentage() { return _scaling; };
    double getPenetrationPercentage() { return _penetration_percentage; };
  };

  constexpr double CUMULATIVE_PERCENT_REDUCTION(double x, double y)
  {
    return x / 100.0 + y / 100.0 - (x / 100.0) * (y / 100.0);
  };

  constexpr double POST_MITIGATION_DMG(double dmg, double R)
  {
    return dmg / ((1 + R) / 100);
  };

}

#endif