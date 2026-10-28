CXX := g++
CXXFLAGS := -std=c++17 -O2 -pthread
TARGET := wr_calc
SRCS := src/main.cpp src/league.cpp

.PHONY: all run clean

all: $(TARGET)

$(TARGET): $(SRCS) src/league.hpp src/token.hpp
	$(CXX) $(CXXFLAGS) $(SRCS) -o $(TARGET)

run: $(TARGET)
	./$(TARGET)

clean:
	rm -f $(TARGET)
