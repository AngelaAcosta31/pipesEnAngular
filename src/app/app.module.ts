import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//cambiar local de la app para el idioma

import localEs from '@angular/common/locales/es-CO';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    PrimeNgModule,
    AppRouterModule,
    VentasModule
  ],
  providers: [
    {provide: LOCALE_ID,useValue:'es-CO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
