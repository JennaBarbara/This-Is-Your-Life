import { Component, OnInit, Input } from '@angular/core';

import { PersonaldecisionsService } from '../personaldecisions.service';
import {personaldecisions} from '../PersonalDecisions';

import {basics} from '../Basics';



@Component({
  selector: 'app-personaldecisions',
  templateUrl: './personaldecisions.component.html',
  styleUrls: ['./personaldecisions.component.css']
})
export class PersonaldecisionsComponent implements OnInit {
  @Input() myBasics : basics;
  myPersonalDecisions : personaldecisions;
  grammer1 : String;

  constructor(private PersonaldecisionsService: PersonaldecisionsService) { }

  ngOnInit() {
    this.getPersonalDecisions();
  }

  getPersonalDecisions(): void {
    //this.PersonaldecisionsService.getPersonalDecisions(this.myBasics);
    this.myPersonalDecisions = this.PersonaldecisionsService.getPersonalDecisions(this.myBasics);
    if(this.myBasics.Background[0] == 'A' || this.myBasics.Background[0] == 'E' || this.myBasics.Background[0] == 'U' || this.myBasics.Background[0] == 'O'){
        this.grammer1 = "an";
    }
    else { this.grammer1 = "a"; }

  }

}
