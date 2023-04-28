import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isHideLoadingDoom:boolean=true;
  ngOnInit(): void {
    let seconds=2.25;
    setTimeout(() => { // set attribute value after 3 seconds,
      this.isHideLoadingDoom=false;
    }, seconds * 1300);
  }

  title = 'Crud-2.0';


}
