#pragma once

#include "User.h"

class Visitor : public User {
    private:
        string visitReason;

    public:
        string getRole() override;
};