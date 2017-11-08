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
        //private urlService: string = "http://localhost:55612/";
        this.urlService = "http://35.202.173.22:8080/";
        this.accessToken = "";
        this.headers = new http_1.Headers();
        this.headers.set("Content-Type", "application/json");
        this.addAuthorizationHeader();
        this.requestOptions = new http_1.RequestOptions({ headers: this.headers });
    }
    HttpServiceBase.prototype.addAuthorizationHeader = function () {
        if (this.googleService.isSignedIn) {
            this.headers.set("x-authorization", "Bearer " + this.googleService.auth2.currentUser.get().getAuthResponse().id_token);
            //this.headers.set("x-authorization", "Bearer " + "eyJhbGciOiJSUzI1NiIsImtpZCI6ImExMmMzYTYxMDkxOTMzMDgzMDA3OTkyNWRmOWM5NWFkODUyNzQ1ODAifQ.eyJhenAiOiI3NDI5NjYyNzE0NTUtZTA5bnY5NGsybzNmMmVzNWQ2NGdhM2dpMDhrMWZmNWouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI3NDI5NjYyNzE0NTUtZTA5bnY5NGsybzNmMmVzNWQ2NGdhM2dpMDhrMWZmNWouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDE1MjI4ODU4MzUwODI4OTI4OTciLCJlbWFpbCI6ImFzdHJpZG5hcmFuam9uQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiQUY1U1hpVVRycGx4bHFiRWVCeGJjdyIsImlzcyI6ImFjY291bnRzLmdvb2dsZS5jb20iLCJqdGkiOiIxYTM5ZDRiNTdkYjM4YWM3ZjNkZTQyM2Q4ZmI4Y2M4MjAzZDhhN2ViIiwiaWF0IjoxNTEwMTQyMDA2LCJleHAiOjE1MTAxNDU2MDYsIm5hbWUiOiJBc3RyaWQgTmFyYW5qbyIsInBpY3R1cmUiOiJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLW81b3RTR0pNaEZzL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUQ0L0lvVmxQblVtdF9rL3M5Ni1jL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiJBc3RyaWQiLCJmYW1pbHlfbmFtZSI6Ik5hcmFuam8iLCJsb2NhbGUiOiJlcy00MTkifQ.OJwaNpox2AF-bmRznk8ZA-B-TIfXfgaA8UtQ1kaq7jbIDyb4IPrlJFhzL1V2qGIMwxR5j4imZJDhiBM0trV2Qi2pLcEIrCEiHJKNJlpfS6Rot0ki_2eF_XcVzgRtIIEK9snN9c_PNOsd3TIgMT83XfeL3-d0xKZ7IREhy7Js-NUHAEwIfOAbSDt46q-6GNHPtR2Gom4PnE8Kjr4M5urCDnN4O1xWocrGqu5ClL7L0Jbra78farg_E8Iju-2z3orF2Ufppuw_7oBuErDl-SAeFFyIGPv0xCxEjJ6vikDN6GxMplgYiPk1fsIPs8ImO9OJAs7rMRxbjB1vSTlEQt-g8Q");
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