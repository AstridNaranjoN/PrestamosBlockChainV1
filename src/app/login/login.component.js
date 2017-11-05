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
var user_model_1 = require("../models/users/user.model");
var app_service_1 = require("../util/app/app.service");
var appLabels_service_1 = require("../util/app/appLabels.service");
var googleAuth_service_1 = require("../util/app/googleAuth.service");
var LoginComponent = (function () {
    function LoginComponent(router, app, googleService) {
        this.router = router;
        this.app = app;
        this.googleService = googleService;
        this.labels = new appLabels_service_1.Labels();
        this.user = new user_model_1.User();
        this.name = "";
        this.image = "";
        // setTimeout(function(googleService: GoogleAuthService) {
        //     alert('final -' + googleService.email);
        // }, 0, {googleService});
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.name = this.googleService.userName;
        this.image = this.googleService.userImage;
    };
    LoginComponent.prototype.immediateSignInCallback = function (googleUser, app, router) {
        //setTimeout(function(){window.location.replace("/home"); }, 3000);
        window.location.replace("/home");
        //router.router.navigate(['/home']);
        document.getElementById("login").setAttribute("style", "background:green !important");
    };
    LoginComponent.prototype.immediateSignInError = function (err) {
        console.log(err);
    };
    LoginComponent.prototype.logIn = function () {
        var _this = this;
        if (!this.googleService.isSignedIn) {
            this.googleService.auth2.signIn().then(function (data, app, router) { _this.immediateSignInCallback(data, _this.app, _this); }, this.immediateSignInError);
            return;
        }
        setTimeout(function () { this.router.navigate(['/home']); }, 3000);
        this.router.navigate(['/home']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, app_service_1.App, googleAuth_service_1.GoogleAuthService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map