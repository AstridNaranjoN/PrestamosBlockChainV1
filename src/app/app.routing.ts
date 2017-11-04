import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IntermediateComponent } from './intermediate/intermediate.component';
import { HomeComponent } from './home/home.component';
import { ConsultarBonosComponent } from './bonds/consultar/consultarBonos.component';
import { EmitirBonoComponent } from './bonds/emitir/emitirBono.component';
import { AdquirirBonoComponent } from './bonds/adquirir/adquirirBono.component';
import { PagarBonoComponent } from './bonds/pagar/pagarBono.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'intermediate', component: IntermediateComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'consultarBonos', component: ConsultarBonosComponent },
      { path: 'emitirBono', component: EmitirBonoComponent },
      { path: 'adquirirBono', component: AdquirirBonoComponent },
      { path: 'pagarBonos', component: PagarBonoComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);