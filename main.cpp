#include "league.hpp"
#include "third_party/httplib.h"
#include "third_party/json.hpp"

using json = nlohmann::json;

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
    catch (const std::exception &e)
    {
      res.status = 400;
      res.set_content(json{{"error", e.what()}}.dump(), "application/json");
    }
  });

  const char *portEnv = std::getenv("PORT");
  int port = portEnv ? std::atoi(portEnv) : 8080;

  std::cout << "Listening on http://0.0.0.0:" << port << std::endl;
  svr.listen("0.0.0.0", port);

  return 0;
}
