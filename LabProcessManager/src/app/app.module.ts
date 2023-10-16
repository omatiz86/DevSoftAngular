import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ReporteUsuariosComponent } from './modules/reporte/reporte-usuarios/reporte-usuarios.component';
import { ReporteHistoricosComponent } from './modules/reporte/reporte-historicos/reporte-historicos.component';
import { ReporteHistoricoComponent } from './modules/reporte/reporte-historico/reporte-historico.component';
import { CrearUsuarioComponent } from './modules/crear-usuario/crear-usuario.component';
import { UsuarioComponent } from './modules/usuario/usuario/usuario.component';
import { Page404Component } from './core/page404/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ReporteUsuariosComponent,
    ReporteHistoricosComponent,
    ReporteHistoricoComponent,
    CrearUsuarioComponent,
    UsuarioComponent,
    Page404Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
