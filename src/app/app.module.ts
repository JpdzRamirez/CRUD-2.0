import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { LoadingInterceptor } from './shared/spinner.interceptor';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { BoardModule } from './board/board.module';
import { LoaderSpinnerService } from './utils/services/loader-spinner.service';
import { SharedModule } from './shared/shared.module';
import { ErrorIntercept } from './shared/error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BoardModule,
    SharedModule,
  ],
  providers: [
      {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorIntercept,
        multi: true
      },
    //LoaderSpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
