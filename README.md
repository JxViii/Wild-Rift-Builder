# Wild Rift Build Calculator

Pick up to 6 items in a browser UI, hit Calculate, and get combined stats,
gold cost, and passive text back — computed entirely by a C++ backend.

The frontend (`public/`) is a thin, static presentation layer. Every piece
of build logic — combining stats across items, gold totals, and item-slot
rules — lives in C++ and is exposed over a small JSON API.

## Backend

Two files hold the whole domain model:

- **`token.hpp`** — the single source of truth for stat and item-category
  IDs, as plain `#define`s. Stats (`AP`, `AD`, `ARMOR`, `MR`, `CRIT`, ...)
  and item categories (`PHYSICAL`, `MAGIC`, `DEFENSE`, `SUPPORT`, `ACTIVE`,
  `BOOTS`) are just integers under the hood; every other file — C++ or
  JS — refers to them by name.
- **`league.hpp` / `league.cpp`** — the `lol` namespace, with four classes:
  - `Stat` — one `(type, value)` pair, e.g. `{ AD, 60 }`.
  - `Passive` — a named ability text (`title` + `desc`), optionally
    carrying its own bonus `Stat`.
  - `Object` — one item: gold cost, category (`_type`), title, a list of
    `Stat`s, and a list of `Passive`s. `getAttribute(type)` sums that
    item's stats of a given type.
  - `Set` — up to 6 `Object`s. Enforces the size cap and a **max of one
    `ACTIVE` item** (Wild Rift only lets you run one boots enchantment at
    a time) both on construction and on `addObject`. `print()` walks
    every stat type in `token.hpp`, sums it across the whole set, applies
    the `AP_PERCENTAGE`/`AD_PERCENTAGE` multipliers, and returns an
    `nlohmann::ordered_json` — ordered so `Gold` always comes first in
    the response, regardless of what other stats are present.

`main.cpp` is the thin HTTP layer on top of that model:

- Serves `public/` as static files (the frontend).
- `POST /api/attributes` — takes `{ objects: [...] }` (each with `gold`,
  `type`, `title`, `stats`, optional `passives`), builds a `lol::Set`,
  and returns `Set::print()`'s JSON. Constraint violations (too many
  items, two `ACTIVE` items) surface as a `400` with an `error` message
  instead of crashing the process.
- Reads the listen port from the `PORT` env var (falls back to `8080`
  locally) so it runs as-is on hosts like Render that assign their own
  port.

Dependencies are vendored as single-header libraries in `third_party/`
(`httplib.h` for the server, `json.hpp` for JSON) — no package manager
needed to build.

## Frontend

`public/` is plain HTML/CSS/JS, no build step or framework:

- `js/statTypes.js` — the JS mirror of `token.hpp`'s stat and category
  IDs (`STAT_TYPES`, `ITEM_TYPES`), plus `statsToTypeArray()` to convert
  a readable `{ AD: 60 }` object into the `[{ type, value }]` shape the
  API expects.
- `js/items.js` — the item catalog: one entry per item (title, gold,
  image, category, readable stats, passives).
- `js/app.js` — all UI behavior: 6 build slots, an item gallery grouped
  by category, add/remove, and the `Calculate`/`Clear` actions that call
  the API and render its response.

## Building & running

```sh
make        # compiles main.cpp + league.cpp -> ./wr_calc
make run    # build (if needed) and start the server
make clean  # remove the binary
```

Then open `http://localhost:8080` — it serves both the UI and the API
from the same process.

## Deploying

A `Dockerfile` is included (multi-stage: compiles with `gcc:13`, ships
a slim `debian:bookworm-slim` runtime image with just the binary and
`public/`). Any host that runs Docker images and injects a `PORT` env
var — Render, Fly.io, Railway — can run this as-is with no extra config.
