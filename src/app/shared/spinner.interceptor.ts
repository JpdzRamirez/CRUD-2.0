import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderSpinnerService } from '../utils/services/loader-spinner.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  private totalRequests = 0;

  constructor(
    private loadingService: LoaderSpinnerService
  ) {}

 intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('caught')
    this.totalRequests++;
    this.loadingService.show();
    return next.handle(request).pipe(
      finalize(() => {
        console.log('finalized')
        this.totalRequests--;
        if (this.totalRequests == 0) {
          this.loadingService.hide();
        }
      })
    );
  }
}
