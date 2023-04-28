import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit {

  isAllLoaded:boolean=false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isAllLoaded=true;
    }, 2200);

  }

}
