import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    children:[
      {path: 'login', component:LoginComponent },
      {path: 'signup', component: RegisterComponent},
      {path: 'forgot', component: ForgotComponent},
      {path: 'menu', component: MenuComponent},
            ]
    },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }



