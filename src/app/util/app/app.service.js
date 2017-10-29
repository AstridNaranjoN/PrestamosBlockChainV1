"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var user_model_1 = require("../../models/users/user.model");
var App = (function () {
    function App() {
        this._isLoggedIn = false;
        this._user = new user_model_1.User();
    }
    Object.defineProperty(App.prototype, "isLoggedIn", {
        get: function () {
            return this._isLoggedIn;
        },
        set: function (value) {
            this._isLoggedIn = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App.prototype, "Bond", {
        get: function () {
            return this._bond;
        },
        set: function (value) {
            this._bond = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App.prototype, "User", {
        get: function () {
            return this._user;
        },
        set: function (user) {
            this._user = user;
        },
        enumerable: true,
        configurable: true
    });
    return App;
}());
App = __decorate([
    core_1.Injectable()
], App);
exports.App = App;
//# sourceMappingURL=app.service.js.map