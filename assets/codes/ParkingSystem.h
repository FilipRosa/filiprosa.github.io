#pragma once

#include <vector>

#include "Reservation.h"

using namespace std;

class ParkingSystem {
    private:
        vector<Reservation*> reservations;

    public:
        bool checkAvailability();
        Reservation* confirmReservation();
        void cancelReservation();
};