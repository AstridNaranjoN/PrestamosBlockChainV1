"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_service_1 = require("../util/app/app.service");
var googleAuth_service_1 = require("../util/app/googleAuth.service");
var MenuComponent = (function () {
    function MenuComponent(router, app, googleService) {
        this.router = router;
        this.app = app;
        this.googleService = googleService;
        this.name = "";
        this.image = "";
        setTimeout(function (menu) {
            menu.name = menu.googleService.userName;
            menu.image = menu.googleService.userImage;
        }, 1000, this);
    }
    MenuComponent.prototype.logout = function () {
        var _this = this;
        this.googleService.signOut(function (router) {
            if (router === void 0) { router = _this.router; }
            return (_this.close(router));
        });
    };
    MenuComponent.prototype.close = function (router) {
        router.navigate(['/login']);
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: 'bc-menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, app_service_1.App, googleAuth_service_1.GoogleAuthService])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map