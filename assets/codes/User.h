#pragma once

#include <string>
using namespace std;

class User {
    private:
        int id;
        string name;
        string surname;
        string email;

    public:
        virtual string getRole() = 0;
        virtual ~User() {}
};