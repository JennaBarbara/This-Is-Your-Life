import { Component, OnInit } from '@angular/core';

import { OriginsService } from '../origins.service';
import {origin} from '../Origin';



@Component({
  selector: 'app-origins',
  templateUrl: './origins.component.html',
  styleUrls: ['./origins.component.css']
})
export class OriginsComponent implements OnInit {
  var demo;
  constructor(private originsService: OriginsService) { }

  ngOnInit() {
    this.getOrigins();
  }
  getOrigins(): void {
      this.demo = this.originsService.getOrigins();
    }
}
