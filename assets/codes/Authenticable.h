#pragma once

class Authenticable {
    public:
        virtual void login() = 0;
        virtual void logout() = 0;
        virtual ~Authenticable() {}
};