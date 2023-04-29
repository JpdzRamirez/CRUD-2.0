import {  Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit  {
  // Sets the number of stars we wish to display
  @ViewChildren('introStarwars',{read: ElementRef}) childStarwars: QueryList<ElementRef>;

isHidding:boolean=true;

constructor(private renderer:Renderer2, private host:ElementRef){

}
ngOnInit(): void {
  //const intro=this.childStarwars;

  const seconds=6;
  const numStars = 100;

  setTimeout(()=>{
    console.log("activationss");
    this.renderer.removeAttribute(this.childStarwars.first.nativeElement,'hidden');
  },seconds* 200);

  setTimeout(() => {
    this.isHidding=false;
    this.renderer.removeChild(this.host.nativeElement,this.childStarwars.first.nativeElement);
  }, seconds* 10000);


// For every star we want to display


  for (let i = 0; i < numStars; i++) {
    let star = document.createElement("div");
    star.className = "star";
    var xy = this.getRandomPosition();
      star.style.top = xy[0] + 'px';
      star.style.left = xy[1] + 'px';
    document.body.append(star);
  }
}



// Gets random x, y values based on the size of the container
public getRandomPosition() {
  var y = window.innerWidth;
  var x = window.innerHeight;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
}


}
