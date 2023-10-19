import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ReporteUsuariosComponent } from './modules/reporte/reporte-usuarios/reporte-usuarios.component';
import { ReporteHistoricoComponent } from './modules/reporte/reporte-historico/reporte-historico.component';
import { CrearUsuarioComponent } from './modules/usuario/crear-usuario/crear-usuario.component';
import { UsuarioComponent } from './modules/usuario/usuario/usuario.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ReporteUsuariosComponent,    
    ReporteHistoricoComponent,
    CrearUsuarioComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
