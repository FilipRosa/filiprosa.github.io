#pragma once

#include "User.h"

class Employee : public User {
    private:
        string department;

    public:
        string getRole() override;
};