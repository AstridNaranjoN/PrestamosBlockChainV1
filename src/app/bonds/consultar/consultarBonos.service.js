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
var httpBase_service_1 = require("../../util/app/httpBase.service");
var ConsultarBonosService = (function () {
    function ConsultarBonosService(httpBase) {
        this.httpBase = httpBase;
    }
    ConsultarBonosService.prototype.consultarBonos = function () {
        var headers = new http_1.Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json');
        // return this.httpBase.getWithHeaders('http://35.188.4.120:8080/bonds', headers);
        //return this.httpBase.get('http://201.232.60.131:3000/bonds');
        return this.httpBase.get('/app/bonds/consultar/bonos.json');
    };
    return ConsultarBonosService;
}());
ConsultarBonosService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [httpBase_service_1.HttpServiceBase])
], ConsultarBonosService);
exports.ConsultarBonosService = ConsultarBonosService;
//# sourceMappingURL=consultarBonos.service.js.map