import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  isHideLoading:boolean = true;

  constructor(){}

      ngOnInit(): void {
        let seconds = 2.55;
        setTimeout(() => { // set attribute value after 3 seconds,
          this.isHideLoading=false;
        }, seconds * 800);
      }

}
