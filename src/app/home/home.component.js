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
var googleAuth_service_1 = require("../util/app/googleAuth.service");
var HomeComponent = (function () {
    function HomeComponent(router, route, googleService) {
        this.router = router;
        this.route = route;
        this.googleService = googleService;
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function (home) {
            if (!home.googleService.isSignedIn) {
                home.router.navigate(['/login']);
                return;
            }
        }, 1000, this);
    };
    HomeComponent.prototype.emitirBono = function () {
        this.router.navigate(['./emitirBono'], { relativeTo: this.route });
    };
    HomeComponent.prototype.misBonos = function () {
        this.router.navigate(['./misBonos'], { relativeTo: this.route });
    };
    HomeComponent.prototype.adquirirBonos = function () {
        this.router.navigate(['./adquirirBono'], { relativeTo: this.route });
    };
    HomeComponent.prototype.consultarBonos = function () {
        this.router.navigate(['./consultarBonos'], { relativeTo: this.route });
    };
    HomeComponent.prototype.pagarBonos = function () {
        this.router.navigate(['./pagarBonos'], { relativeTo: this.route });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, googleAuth_service_1.GoogleAuthService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map