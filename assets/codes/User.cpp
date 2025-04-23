#include "User.h"

void User::login() {
    if (authStrategy) {
        authStrategy->login();
    }
}

void User::logout() {
    if (authStrategy) {
        authStrategy->logout();
    }
}