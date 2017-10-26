import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

/*Componentes propios*/
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AdquirirBonoComponent } from './bonds/adquirir/adquirirBono.component';
import { ConsultarBonosComponent } from './bonds/consultar/consultarBonos.component';
import { EmitirBonoComponent } from './bonds/emitir/emitirBono.component';
import { PagarBonoComponent } from './bonds/pagar/pagarBono.component';

import { routing } from './app.routing';

/*Servicios propios*/
import { App } from './util/app/app.service';
import { HttpServiceBase } from './util/app/httpBase.service';

@NgModule({
  imports: [BrowserModule, HttpModule,
    RouterModule, FormsModule,
    routing
  ],
  declarations: [AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MenuComponent,
    AdquirirBonoComponent,
    ConsultarBonosComponent,
    EmitirBonoComponent,
    PagarBonoComponent,],
  bootstrap: [AppComponent],
  providers: [App, HttpServiceBase]
})
export class AppModule { }
