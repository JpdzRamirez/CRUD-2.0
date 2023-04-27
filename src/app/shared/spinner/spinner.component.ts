import { Component } from '@angular/core';

import { LoaderSpinnerService } from 'src/app/utils/services/loader-spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  isLoading$=this.loader.isLoading$;

  constructor(public loader: LoaderSpinnerService) {}
}
