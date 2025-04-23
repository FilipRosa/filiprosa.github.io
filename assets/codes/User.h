#pragma once

#include <string>
#include "Authenticable.h"
using namespace std;

class User {
    protected:
        int id;
        string name;
        string surname;
        string email;
        Authenticable* authStrategy;

    public:
        virtual string getRole() = 0;
        void login();
        void logout();
        virtual ~User() = default;
};