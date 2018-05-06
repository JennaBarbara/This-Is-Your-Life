import { Component, OnInit, Input} from '@angular/core';
import { LifeeventsService } from '../lifeevents.service';
import { Life } from '../LifeEvent';

import {basics} from '../Basics';

@Component({
  selector: 'app-lifeevents',
  templateUrl: './lifeevents.component.html',
  styleUrls: ['./lifeevents.component.css']
})
export class LifeeventsComponent implements OnInit {
  @Input() myBasics : basics;
  myLife : Life;

  constructor(private lifeService: LifeeventsService ) { }

  ngOnInit() {
    this.getLife();
  }

  getLife(): void {
      this.myLife = this.lifeService.getLifeEvents(this.myBasics);
  }
}
