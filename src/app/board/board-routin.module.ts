import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardComponent } from './board.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';



const routes: Routes = [
  {
    path: '',
    component:BoardComponent,
    children:[
      {path: 'list', component:ListComponent },
      {path: 'add', component: AddComponent},
      {path: ':id/edit', component: EditComponent},
      ]
    },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }

