FROM gcc:13 AS build
WORKDIR /app
COPY . .
RUN g++ -std=c++17 -O2 -pthread main.cpp league.cpp -o wr_calc

FROM debian:bookworm-slim
RUN apt-get update && apt-get install -y --no-install-recommends libstdc++6 && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY --from=build /app/wr_calc ./wr_calc
COPY --from=build /app/public ./public
CMD ["./wr_calc"]
