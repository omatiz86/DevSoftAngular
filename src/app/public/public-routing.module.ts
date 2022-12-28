import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PublicModule } from "./public.module";

const routes: Routes = [
    { path: '', component : PublicComponent, children :
    [
        {path: '', redirectTo 'home', pathMatch: 'full'  },
        {path: '', 'login', component: HomeCompnent  }
    ]

    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],  
    exports:[RouterModule]
  
})

export class PublicRoutingModule {}