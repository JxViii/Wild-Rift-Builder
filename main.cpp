#include "league.hpp"
#include "third_party/httplib.h"
#include "third_party/json.hpp"

using json = nlohmann::json;

static lol::Stat statFromJson(const json &j);
static lol::Passive passiveFromJson(const json &j);
static lol::Object objectFromJson(const json &j);
static lol::Ability abilityFromJson(const json &j);
static lol::Dummy dummyFromJson(const json &j);
static std::pair<std::string, double> namedStatFromJson(const json &j);

int main()
{
  httplib::Server svr;

  svr.set_mount_point("/", "./public");

  svr.Post("/api/attributes", [](const httplib::Request &req, httplib::Response &res)
           {
    try
    {
      json body = json::parse(req.body);

      std::vector<lol::Object> objects;
      for (const auto &objJson : body.at("objects"))
      {
        objects.push_back(objectFromJson(objJson));
      }

      lol::Set set(objects);

      nlohmann::ordered_json result = set.print();

      res.set_content(result.dump(), "application/json");
    }
    catch (const std::exception &e){
      res.status = 400;
      res.set_content(json{{"error", e.what()}}.dump(), "application/json");
    } });

  svr.Post("/api/ability", [](const httplib::Request &req, httplib::Response &res)
           {
    try
    {
      json body = json::parse(req.body);

      lol::Ability test_ability = abilityFromJson(body.at("ability"));
      lol::Dummy test_dummy = dummyFromJson(body.at("dummy"));

      std::vector<lol::Stat> test_build;
      for (const auto &stat : body.at("build")){
        test_build.push_back(statFromJson(stat));
      }

      //! Echo back every stat we managed to parse so the caller can confirm
      //! none of the items it sent got dropped or malformed on the way in.
      nlohmann::ordered_json echoedBuild = nlohmann::ordered_json::array();
      for (auto &stat : test_build)
      {
        echoedBuild.push_back({{"type", stat.getType()}, {"value", stat.getValue()}});
      }

      nlohmann::ordered_json result = nlohmann::ordered_json::object();

      double test_dmg = 0.0;
      for( lol::Stat &stat : test_build ){
        if(stat.getType() == test_ability.getType()){
          test_dmg = test_ability.getTotalDamage(stat);
        }
      } 

      result["PRE_MITIGATION_DAMAGE"] = test_dmg;
      result["POST_MITIGATION_DAMAGE"] = test_dummy.getMitigatedDamage(test_ability, test_build);

      res.set_content(result.dump(), "application/json");
    }
    catch (const std::exception &e)
    {
      res.status = 400;
      res.set_content(json{{"error", e.what()}}.dump(), "application/json");
    } });

  const char *portEnv = std::getenv("PORT");
  int port = portEnv ? std::atoi(portEnv) : 8080;

  std::cout << "Listening on http://0.0.0.0:" << port << std::endl;
  svr.listen("0.0.0.0", port);

  return 0;
}

static lol::Stat statFromJson(const json &j)
{
  int type = j.at("type").get<int>();
  double value = j.at("value").get<double>();

  if (j.contains("adaptative"))
  {
    return lol::Stat(type, value, j.at("adaptative").get<double>());
  }

  return lol::Stat(type, value);
}

static lol::Passive passiveFromJson(const json &j)
{
  if (j.contains("stat"))
  {
    return lol::Passive(j.at("title").get<std::string>(), j.at("desc").get<std::string>(), statFromJson(j.at("stat")));
  }
  return lol::Passive(j.at("title").get<std::string>(), j.at("desc").get<std::string>());
}

static lol::Object objectFromJson(const json &j)
{

  int gold = j.at("gold").get<int>();
  int type = j.at("type").get<int>();
  std::string title = j.at("title").get<std::string>();

  std::vector<int> bannedSet = j.value("banned_set", std::vector<int>{0});

  std::vector<lol::Stat> stats;
  for (const auto &s : j.value("stats", json::array()))
  {
    stats.push_back(statFromJson(s));
  }

  std::vector<lol::Passive> passives;
  for (const auto &p : j.value("passives", json::array()))
  {
    passives.push_back(passiveFromJson(p));
  }

  return lol::Object(bannedSet, gold, type, title, stats, passives);
}

static lol::Ability abilityFromJson(const json &j)
{

  int type = j.at("type").get<int>();
  double base = j.at("base").get<double>();
  double scaling = j.at("scaling").get<double>();

  if (j.contains("penetration_percentage"))
  {
    return lol::Ability(type, base, scaling, j.at("penetration_percentage"));
  }

  return lol::Ability(type, base, scaling);
}

static lol::Dummy dummyFromJson(const json &j)
{

  lol::Stat hp = statFromJson(j.at("HP"));
  lol::Stat R = statFromJson(j.at("R"));
  double reduction = j.at("reduction").get<double>();

  return lol::Dummy(hp, R, reduction);
}