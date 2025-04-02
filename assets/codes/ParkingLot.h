#pragma once

#include <string>

using namespace std;

class ParkingLot {
    private:
        int id;
        string name;
        string location;
        int numberOfSpots;

    public:
        void showMap();
};