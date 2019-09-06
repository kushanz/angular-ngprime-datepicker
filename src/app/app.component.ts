import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
   newdate: any;
   value: string;
   disabled: boolean = true;
   dateformat: string;
   dataType:string;
   dt:string;
constructor() { }
  ngOnInit() {
    this.dt = "11.05.2019";
    this.dataType = 'string';
    this.newdate = "5-24-2019";
    // this.newdate = new Date("5/24/2019");
    this.dateformat = '';
  }

   addDate() {
    this.newdate = new Date(this.value);
   }
   toggleDisable() {
     this.disabled = !this.disabled;
   }
}
