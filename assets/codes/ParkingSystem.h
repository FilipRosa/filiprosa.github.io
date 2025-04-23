#pragma once

#include <vector>
#include "Reservation.h"

using namespace std;

class ParkingSystem {
    private:
        vector<Reservation> reservations;

    public:
        void checkAvailability();
        void confirmReservation();
        void cancelReservation();
};