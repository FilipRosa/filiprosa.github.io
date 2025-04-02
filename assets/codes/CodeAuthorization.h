#pragma once

#include "Authenticable.h"
#include <string>
#include <chrono>

using namespace std;

class CodeAuthorization : public Authenticable {
    private:
        string code;
        chrono::system_clock::time_point expiration;

    public:
        void verifyCode();
        void login() override;
        void logout() override;
};