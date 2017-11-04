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
var bond_model_1 = require("../../models/bonds/bond.model");
var appLabels_service_1 = require("../../util/app/appLabels.service");
var app_service_1 = require("../../util/app/app.service");
var adquirirBono_service_1 = require("./adquirirBono.service");
var AdquirirBonoComponent = (function () {
    function AdquirirBonoComponent(app, service, router, activeRoute) {
        this.app = app;
        this.service = service;
        this.router = router;
        this.activeRoute = activeRoute;
        this.labels = new appLabels_service_1.Labels();
        this.bond = new bond_model_1.Bond();
    }
    AdquirirBonoComponent.prototype.ngOnInit = function () {
        this.bond = this.app.Bond;
    };
    AdquirirBonoComponent.prototype.adquirirBono = function () {
        var _this = this;
        this.service.adquirirBono(this.bond).subscribe(function (result) {
            alert(result);
            _this.goToBondslist();
        }, function (error) { return console.log(error); });
    };
    AdquirirBonoComponent.prototype.cancelar = function () {
        this.bond = new bond_model_1.Bond();
        this.goToBondslist();
    };
    AdquirirBonoComponent.prototype.goToBondslist = function () {
        this.router.navigate(['./consultarBonos'], { relativeTo: this.activeRoute.parent });
    };
    return AdquirirBonoComponent;
}());
AdquirirBonoComponent = __decorate([
    core_1.Component({
        selector: 'adquirirBono',
        templateUrl: './adquirirBono.component.html',
        providers: [adquirirBono_service_1.AdquirirBonosService]
    }),
    __metadata("design:paramtypes", [app_service_1.App, adquirirBono_service_1.AdquirirBonosService, router_1.Router, router_1.ActivatedRoute])
], AdquirirBonoComponent);
exports.AdquirirBonoComponent = AdquirirBonoComponent;
//# sourceMappingURL=adquirirBono.component.js.map