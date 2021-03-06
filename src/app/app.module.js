"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
/*Componentes propios*/
var login_component_1 = require("./login/login.component");
var intermediate_component_1 = require("./intermediate/intermediate.component");
var home_component_1 = require("./home/home.component");
var menu_component_1 = require("./menu/menu.component");
var adquirirBono_component_1 = require("./bonds/adquirir/adquirirBono.component");
var consultarBonos_component_1 = require("./bonds/consultar/consultarBonos.component");
var emitirBono_component_1 = require("./bonds/emitir/emitirBono.component");
var pagarBono_component_1 = require("./bonds/pagar/pagarBono.component");
var misBonos_component_1 = require("./bonds/consultar/misBonos.component");
var app_routing_1 = require("./app.routing");
/*Servicios propios*/
var app_service_1 = require("./util/app/app.service");
var httpBase_service_1 = require("./util/app/httpBase.service");
var googleAuth_service_1 = require("./util/app/googleAuth.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule,
            router_1.RouterModule, forms_1.FormsModule,
            app_routing_1.routing
        ],
        declarations: [app_component_1.AppComponent,
            login_component_1.LoginComponent,
            intermediate_component_1.IntermediateComponent,
            home_component_1.HomeComponent,
            menu_component_1.MenuComponent,
            adquirirBono_component_1.AdquirirBonoComponent,
            consultarBonos_component_1.ConsultarBonosComponent,
            emitirBono_component_1.EmitirBonoComponent,
            pagarBono_component_1.PagarBonoComponent,
            misBonos_component_1.misBonosComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [app_service_1.App, httpBase_service_1.HttpServiceBase, googleAuth_service_1.GoogleAuthService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map