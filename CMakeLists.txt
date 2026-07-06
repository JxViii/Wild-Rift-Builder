cmake_minimum_required(VERSION 3.14)
project(wr_calc)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(Threads REQUIRED)

add_executable(wr_calc main.cpp league.cpp)
target_link_libraries(wr_calc PRIVATE Threads::Threads)
