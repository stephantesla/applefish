import { Component, importProvidersFrom, OnInit, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { OverlayModule } from "@angular/cdk/overlay";

//fontawsome icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faNoteSticky } from '@fortawesome/free-regular-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
//fontawsome icons

@NgModule({
   imports: [BrowserModule, FormsModule, OverlayModule,FontAwesomeModule],
   declarations: [],
   bootstrap: [AppComponent]
})

export class AppModule {
  
}


@Component({
  selector: 'app-staffcourse1',
  templateUrl: './staffcourse1.component.html',
  styleUrls: ['./staffcourse1.component.css']
})
export class Staffcourse1Component implements OnInit {
  //fontawsome icons-starts
  faCoffee = faCoffee;
  faMagnifyingGlass=faMagnifyingGlass;
  faLink=faLink;
  faPaperPlane=faPaperPlane;
  faUser=faUser;
  faNoteSticky=faNoteSticky;
  faVideo=faVideo;
  faQuestionCircle=faQuestionCircle;
  faPaperclip=faPaperclip;
  //fontawsomeicons ends
  constructor() { 
    
  }
  

  ngOnInit(): void {
  }

}

