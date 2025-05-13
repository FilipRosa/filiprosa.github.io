#pragma once

#include <string>
#include <chrono>

#include "Authenticable.h"

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