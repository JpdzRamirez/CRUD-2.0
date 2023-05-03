import {  Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  // Sets the number of stars we wish to display
  @ViewChildren('introStarwars',{read: ElementRef}) childStarwars: QueryList<ElementRef>;
  //@ViewChildren('menuStarwars',{read: ElementRef}) childMenu: QueryList<ElementRef>;

isHiddingIntro:boolean=true;
isShowMenu:boolean=false;
itsTimeout:number=0;
constructor(private renderer:Renderer2, private host:ElementRef){

}
ngOnInit(): void {

  const seconds=6;
  const numStars = 100;

  setTimeout(()=>{
   // this.renderer.removeAttribute(this.childStarwars.first.nativeElement,'hidden');
  },seconds* 200);

  setTimeout(() => {
          this.isHiddingIntro=false;
          setTimeout(()=>{
            this.isShowMenu=true;
            this.itsTimeout=1;

           },seconds* 300);
          setTimeout(()=>{

            console.log(this.childStarwars.length);
            console.log(this.childStarwars.get(0)?.nativeElement);
            this.renderer.removeStyle(this.childStarwars.get(0)?.nativeElement,'opacity');

          },seconds* 600);

  }, seconds* 1000);



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
  //var y = window.innerWidth;
  //var x = window.innerHeight;
  var y= 1080;
  var x= 1920;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
}

loginButton():void{
  console.log("login Button");
}
backendButton():void{
  console.log("backend Button");
}
frontButton():void{
  console.log("front Button");
}
contactButton():void{
  console.log("contact Button");
}
sqlButton():void{
  console.log("sql Button");
}

}
