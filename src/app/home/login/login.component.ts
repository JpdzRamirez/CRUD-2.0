import { AfterViewInit,Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  isAllLoaded:boolean=false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isAllLoaded=true;
    }, 2200);

  }


  loginCheck():void{

  }
}
