#pragma once

#include "Authenticable.h"
#include <string>

using namespace std;

class SSOAuthorization : public Authenticable {
    public:
        bool verifyUser();
        string generateToken();
        void login() override;
        void logout() override;
};