import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeRoutingModule } from './home-routin.module';

const declared=[HomeComponent,MenuComponent,RegisterComponent,LoginComponent,ForgotComponent];

const imported=[CommonModule,HomeRoutingModule];

@NgModule({
  declarations: [
    declared,
  ],
  imports: [
    imported,
  ],
  providers:[

  ]
})
export class HomeModule { }
