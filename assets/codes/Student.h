#pragma once

#include "User.h"

class Student : public User {
    private:
        string faculty;

    public:
        string getRole() override;
};