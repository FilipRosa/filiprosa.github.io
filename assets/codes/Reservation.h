#pragma once

#include "User.h"
#include "ParkingSpot.h"
#include <string>
#include <chrono>

using namespace std;

class Reservation {
    private:
        int id;
        User* user;
        ParkingSpot* spot;
        chrono::system_clock::time_point timeFrom;
        chrono::system_clock::time_point timeTo;

    public:
        void create();
        void cancel();
        void change();
};