#pragma once

#include "Authenticable.h"
#include <string>

using namespace std;

class SSOAuthorization : public Authenticable {
    private:
        string token;
        bool isAuthenticated;

    public:
        bool verifyUser();
        void generateToken();
        void login() override;
        void logout() override;
        string getToken();
        bool isAuthenticated();
};