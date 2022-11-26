import { Component, OnInit } from '@angular/core';
//fonstawsomeicon-start
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
//fonstawsomeicon-end

@Component({
  selector: 'app-staffhome',
  templateUrl: './staffhome.component.html',
  styleUrls: ['./staffhome.component.css']
})
export class StaffhomeComponent implements OnInit {
  //fontawsomeicon-start
  faHome=faHome;
  faQuestion=faQuestion;
  fauser=faUser;
  faIdCard=faIdCard;
  //font-awsomeicon-ends

  constructor() { }

  ngOnInit(): void {
  }

}
