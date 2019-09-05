import { Component, OnInit,Input,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mydate',
  templateUrl: './mydate.component.html',
  styleUrls: ['./mydate.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MydateComponent implements OnInit {
@Input() inputDate: Date;
@Input() disabled:boolean;
@Input() format:string;
@Input() dataType:string;

  constructor() { }

  ngOnInit() {
    this.disabled = false;
    this.format = "dd-mm-yy";
  }


}