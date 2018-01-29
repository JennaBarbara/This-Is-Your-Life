import { Injectable } from '@angular/core';

import { basics } from './Basics';
import { Races, Classes } from './OriginTables';

@Injectable()
export class BasicsService {

  constructor() { }

  getBasics() {
  return this.GenerateBasics();
  }
  GenerateBasics() {
   var myBasics  = new basics;

     myBasics = {
          Class: this.GenericGenerate(100, Classes),
          Race: this.GenericGenerate(100, Races),
       };
    return myBasics;
  }

  GenericGenerate(n, table){
    var d = this.RollTheDice(n);
    return this.getTableItem(d,table);
  }

  RollTheDice(d) {
    return  Math.floor(Math.random() * d) + 1;
  }

  RollMultipleDice(n, d) {
   var result = 0;
   for(var i=0; i<n; i++){
      result += this.RollTheDice(d);
    }
    return result;
  }

  getTableItem(d,table) {
    var item;
      Object.keys(table).some(function (k) {
          var part = k.split('-');
          if ((d >= Number(part[0]) && d <= Number(part[1])) || d == Number(part[0])) {
              item = table[k];
              return true;
          }
      });
      return item;
  }

}
