import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './core/page404/page404.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { environment } from '../environments/environment';


const routes: Routes = [
  {
    path: 'lab',
    redirectTo: environment.homePage,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: Page404Component,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
/*
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
*/
export class AppRoutingModule { }
