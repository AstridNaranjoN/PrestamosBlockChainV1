"use strict";
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var intermediate_component_1 = require("./intermediate/intermediate.component");
var home_component_1 = require("./home/home.component");
var consultarBonos_component_1 = require("./bonds/consultar/consultarBonos.component");
var emitirBono_component_1 = require("./bonds/emitir/emitirBono.component");
var adquirirBono_component_1 = require("./bonds/adquirir/adquirirBono.component");
var pagarBono_component_1 = require("./bonds/pagar/pagarBono.component");
var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'intermediate', component: intermediate_component_1.IntermediateComponent },
    {
        path: 'home', component: home_component_1.HomeComponent,
        children: [
            { path: 'consultarBonos', component: consultarBonos_component_1.ConsultarBonosComponent },
            { path: 'emitirBono', component: emitirBono_component_1.EmitirBonoComponent },
            { path: 'adquirirBono', component: adquirirBono_component_1.AdquirirBonoComponent },
            { path: 'pagarBonos', component: pagarBono_component_1.PagarBonoComponent }
        ]
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map