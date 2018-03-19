import { Component, OnInit } from '@angular/core';

import { BasicsService } from '../basics.service';
import {basics} from '../Basics';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {
  myBasics : basics;
  constructor(private basicsService: BasicsService,) { }

  ngOnInit() {
    this.getBasics();
  }
  getBasics(): void {
      this.myBasics = this.basicsService.getBasics();
  }
}
