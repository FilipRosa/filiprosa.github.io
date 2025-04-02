#pragma once

#include <vector>
#include "Reservation.h"

class ParkingSystem {
    private:
        vector<Reservations> reservations;

    public:
        void checkAvailability();
        void confirmReservation();
        void cancelReservation();
};