#pragma once

#include <string>
#include "Authenticable.h"
#include "Reservation.h"
using namespace std;

class User {
    protected:
        int id;
        string name;
        string surname;
        string email;
        Authenticable* authStrategy;

    public:
        virtual ~User() = default;

        virtual void login();
        virtual void logout();
        virtual string getRole() = 0;
        Reservation* createReservation();
};