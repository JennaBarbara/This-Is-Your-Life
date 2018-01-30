import { Component, OnInit } from '@angular/core';

import { OriginsService } from '../origins.service';
import {origin} from '../Origin';

import { BasicsService } from '../basics.service';
import {basics} from '../Basics';


@Component({
  selector: 'app-origins',
  templateUrl: './origins.component.html',
  styleUrls: ['./origins.component.css']
})
export class OriginsComponent implements OnInit {
  myBasics : basics;
  myOrigin : origin;
  constructor(private basicsService: BasicsService, private originsService: OriginsService) { }

  ngOnInit() {
    this.getBasics();
    this.getOrigins();
  }
  getBasics(): void {
      this.myBasics = this.basicsService.getBasics();
  }
  getOrigins(): void {
      this.myOrigin = this.originsService.getOrigins(this.myBasics);
  }
}
