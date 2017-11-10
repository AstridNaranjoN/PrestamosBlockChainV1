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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var googleAuth_service_1 = require("../app/googleAuth.service");
var HttpServiceBase = (function () {
    function HttpServiceBase(http, googleService) {
        this.http = http;
        this.googleService = googleService;
        this.urlService = "http://146.148.83.41:8080/";
        this.accessToken = "";
        this.headers = new http_1.Headers();
        this.headers.set("Content-Type", "application/json");
        this.addAuthorizationHeader();
        this.requestOptions = new http_1.RequestOptions({ method: http_1.RequestMethod.Get, headers: this.headers });
    }
    HttpServiceBase.prototype.addAuthorizationHeader = function () {
        if (this.googleService.isSignedIn) {
            this.headers.set("x-authorization", "Bearer " + this.googleService.auth2.currentUser.get().getAuthResponse().id_token);
            this.headers.set("client_id", this.googleService.clientId);
        }
    };
    HttpServiceBase.prototype.get = function (apiUrl) {
        return this.http.get(this.urlService + apiUrl, this.requestOptions)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpServiceBase.prototype.post = function (apiUrl, model) {
        return this.http.post(this.urlService + apiUrl, model, this.requestOptions)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpServiceBase.prototype.put = function (apiUrl, model) {
        return this.http.put(this.urlService + apiUrl, model, this.requestOptions)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpServiceBase.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    HttpServiceBase.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    return HttpServiceBase;
}());
HttpServiceBase = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, googleAuth_service_1.GoogleAuthService])
], HttpServiceBase);
exports.HttpServiceBase = HttpServiceBase;
//# sourceMappingURL=httpBase.service.js.map