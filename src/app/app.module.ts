import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BurgerListComponent } from './burger-list/burger-list.component';

import { FormsModule } from '@angular/forms';
import { BurgerlabAboutComponent } from './burgerlab-about/burgerlab-about.component';
import { BurgerlabBurgersComponent } from './burgerlab-burgers/burgerlab-burgers.component';
import { BurgerlabCartComponent } from './burgerlab-cart/burgerlab-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerListComponent,
    BurgerlabAboutComponent,
    BurgerlabBurgersComponent,
    BurgerlabCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
