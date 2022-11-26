import { Component, OnInit } from '@angular/core';
declare function init():void;
@Component({
  selector: 'app-meet',
  templateUrl: './meet.component.html',
  styleUrls: ['./meet.component.css']
})
export class MeetComponent implements OnInit {

  constructor() { 
    init();
  }

  ngOnInit(): void {
  }

}
