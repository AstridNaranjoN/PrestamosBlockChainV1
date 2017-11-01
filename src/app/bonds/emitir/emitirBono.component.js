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
var bond_model_1 = require("../../models/bonds/bond.model");
var appLabels_service_1 = require("../../util/app/appLabels.service");
var emitirBono_service_1 = require("./emitirBono.service");
var EmitirBonoComponent = (function () {
    function EmitirBonoComponent(service) {
        this.service = service;
        this.labels = new appLabels_service_1.Labels();
        this.bond = new bond_model_1.Bond();
        this.bond.creationDate = new Date();
    }
    EmitirBonoComponent.prototype.emitirBono = function () {
        this.bond.borrowerId = "astridnaranjon@gmail.com";
        this.bond.status = "CREATED";
        this.bond.creationDate = new Date(this.bond.creationDate);
        this.service.emitirBono(this.bond).subscribe(function (result) { return alert(result); }, function (error) { return console.log(error); });
    };
    return EmitirBonoComponent;
}());
EmitirBonoComponent = __decorate([
    core_1.Component({
        selector: 'emitirBono',
        templateUrl: './emitirBono.component.html',
        providers: [emitirBono_service_1.EmitirBonosService]
    }),
    __metadata("design:paramtypes", [emitirBono_service_1.EmitirBonosService])
], EmitirBonoComponent);
exports.EmitirBonoComponent = EmitirBonoComponent;
//# sourceMappingURL=emitirBono.component.js.map