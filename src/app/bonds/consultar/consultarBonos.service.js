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
var httpBase_service_1 = require("../../util/app/httpBase.service");
var ConsultarBonosService = (function () {
    function ConsultarBonosService(httpBase) {
        this.httpBase = httpBase;
    }
    ConsultarBonosService.prototype.consultarBonos = function (id) {
        return this.httpBase.get('bonds/available/' + id);
    };
    ConsultarBonosService.prototype.consultarBonosAdquiridos = function (id) {
        return this.httpBase.get('bonds/borrower/' + id);
    };
    return ConsultarBonosService;
}());
ConsultarBonosService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [httpBase_service_1.HttpServiceBase])
], ConsultarBonosService);
exports.ConsultarBonosService = ConsultarBonosService;
//# sourceMappingURL=consultarBonos.service.js.map