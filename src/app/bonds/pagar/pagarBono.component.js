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
var app_service_1 = require("../../util/app/app.service");
var pagarBono_service_1 = require("./pagarBono.service");
var router_1 = require("@angular/router");
var PagarBonoComponent = (function () {
    function PagarBonoComponent(service, app, router, activeRoute) {
        this.service = service;
        this.app = app;
        this.router = router;
        this.activeRoute = activeRoute;
        this.labels = new appLabels_service_1.Labels();
        this.bond = new bond_model_1.Bond();
        this.totalPay = 0;
        this.bonusSelected = true;
    }
    PagarBonoComponent.prototype.ngOnInit = function () {
        this.bond = this.app.Bond;
        if (this.bond != null) {
            this.bonusSelected = false;
        }
        //this.totalPay = this.bond.amount * 1.1;
        this.totalPay = ((this.bond.amount * 10) / 100 + +this.bond.amount);
    };
    PagarBonoComponent.prototype.pagarBono = function () {
        var _this = this;
        this.service.pagarBono(this.bond).subscribe(function (result) {
            alert("Bono Pagado");
            _this.goToBondslist();
        }, function (error) { return console.log(error); });
    };
    PagarBonoComponent.prototype.goToBondslist = function () {
        this.router.navigate(['./consultarBonos'], { relativeTo: this.activeRoute.parent });
    };
    return PagarBonoComponent;
}());
PagarBonoComponent = __decorate([
    core_1.Component({
        selector: 'pagarBono',
        templateUrl: './pagarBono.component.html',
        providers: [pagarBono_service_1.PagarBonosService]
    }),
    __metadata("design:paramtypes", [pagarBono_service_1.PagarBonosService, app_service_1.App, router_1.Router, router_1.ActivatedRoute])
], PagarBonoComponent);
exports.PagarBonoComponent = PagarBonoComponent;
//# sourceMappingURL=pagarBono.component.js.map