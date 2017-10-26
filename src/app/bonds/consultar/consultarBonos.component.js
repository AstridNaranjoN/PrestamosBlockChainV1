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
var appLabels_service_1 = require("../../util/app/appLabels.service");
var consultarBonos_service_1 = require("./consultarBonos.service");
var ConsultarBonosComponent = (function () {
    function ConsultarBonosComponent(service) {
        this.service = service;
        this.option = 'emitidos';
        this.labels = new appLabels_service_1.Labels();
        this.currentLabels = this.labels.emitirBono;
        this.bonds = [];
        this.functions = { emitidos: this.labelsBonosEmitidos, adquiridos: this.labelsBonosAdquiridos };
    }
    ConsultarBonosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.consultarBonos().subscribe(function (result) { return _this.bonds = result; }, function (error) { return console.log(error); });
    };
    ConsultarBonosComponent.prototype.labelsBonosEmitidos = function (labels) {
        return labels.emitirBono;
    };
    ConsultarBonosComponent.prototype.labelsBonosAdquiridos = function (labels) {
        return labels.adquirirBono;
    };
    ConsultarBonosComponent.prototype.find = function (value) {
        this.option = value;
        this.currentLabels = this.functions[value](this.labels);
    };
    ConsultarBonosComponent.prototype.irPagar = function (id) {
        alert('pagar');
    };
    return ConsultarBonosComponent;
}());
ConsultarBonosComponent = __decorate([
    core_1.Component({
        selector: 'consultarBonos',
        templateUrl: './consultarBonos.component.html',
        providers: [consultarBonos_service_1.ConsultarBonosService]
    }),
    __metadata("design:paramtypes", [consultarBonos_service_1.ConsultarBonosService])
], ConsultarBonosComponent);
exports.ConsultarBonosComponent = ConsultarBonosComponent;
//# sourceMappingURL=consultarBonos.component.js.map