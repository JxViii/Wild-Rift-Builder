FROM gcc:13 AS build
WORKDIR /app
COPY . .
RUN g++ -std=c++17 -O2 -pthread main.cpp league.cpp -o wr_calc

FROM debian:bookworm-slim
WORKDIR /app
COPY --from=build /app/wr_calc ./wr_calc
COPY --from=build /app/public ./public
CMD ["./wr_calc"]
