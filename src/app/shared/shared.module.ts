import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoaderComponent } from './loader/loader.component';

const declarated=[FooterComponent,HeaderComponent,SpinnerComponent,LoaderComponent];
const imported=[CommonModule];
@NgModule({
  declarations:
  [
    declarated
  ],
  imports: [
    imported
  ],
  exports:[
    declarated,
  ]
})
export class SharedModule { }
