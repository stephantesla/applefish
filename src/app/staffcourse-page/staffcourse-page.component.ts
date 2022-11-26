import { Component, OnInit } from '@angular/core';

//fontawsome-icon
import { faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-staffcourse-page',
  templateUrl: './staffcourse-page.component.html',
  styleUrls: ['./staffcourse-page.component.css']
})
export class StaffcoursePageComponent implements OnInit {
      //fontawesome-icon-start
        faUpload=faUpload;
      //fontawesome-icon-end
  constructor() { }

  ngOnInit(): void {
  }

}
