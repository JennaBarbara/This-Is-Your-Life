import { Component, OnInit, Input} from '@angular/core';

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
  @Input() myBasics : basics;
  myOrigin : origin;

  constructor(private originsService: OriginsService) { }

  ngOnInit() {
    this.getOrigins();
  }

  getOrigins(): void {
      this.myOrigin = this.originsService.getOrigins(this.myBasics);
  }
}
