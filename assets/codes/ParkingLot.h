#pragma once

#include <string>
#include <vector>

#include "ParkingSpot.h"

using namespace std;

class ParkingLot {
    private:
        int id;
        string name;
        string location;
        int numberOfSpots;
        vector<ParkingSpot*> spots;

    public:
        void showMap();
};