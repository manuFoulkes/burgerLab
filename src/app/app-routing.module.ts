import { NgModule } from '@angular/core'
import { Routes, RouterModule } from "@angular/router";
import { BurgerlabAboutComponent } from './burgerlab-about/burgerlab-about.component';
import { BurgerlabBurgersComponent } from './burgerlab-burgers/burgerlab-burgers.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'burgers',
        pathMatch: 'full'
    },
    {
        path: 'burgers',
        component: BurgerlabBurgersComponent
    },
    {
        path: 'about', 
        component: BurgerlabAboutComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { };