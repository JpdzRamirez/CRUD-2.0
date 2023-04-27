import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardComponent } from './board.component';

import { AddComponent } from './add/add.component';
import { BoardRoutingModule } from './board-routin.module';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

const declared=[BoardComponent,AddComponent,EditComponent,ListComponent]
const imported=[CommonModule,BoardRoutingModule]

@NgModule({
  declarations: [
    declared
  ],
  imports: [
    imported
  ],
  providers:[

  ]
})
export class BoardModule { }
