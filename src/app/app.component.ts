import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
   newdate: Date;
   value: string;
   disabled: boolean = true;
   dateformat: string;
   dataType:string;
   dt:string;
   currentyear:number;
   fiftybackyear:number;
   futureYear:number;
constructor() { }
  ngOnInit() {
    this.dt = "11-05-2019";
    this.dataType = 'string'; 
    // this.newdate = "5-12-2019";
    // this.newdate = new Date("5/24/2019");
    this.dateformat = '';
    this.futureYear = (new Date().getFullYear()+100);
    this.fiftybackyear = (new Date().getFullYear()-100);
    
  }
   addDate() {
     console.log(this.value)
     
     console.log(new Date())
    this.newdate = new Date(this.value);
    console.log(this.newdate);
   }
   toggleDisable() {
     this.disabled = !this.disabled;
   }
}
