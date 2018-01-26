import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { OriginsComponent } from './origins/origins.component';
import { origin, individual } from './Origin';
import { Parents, Birthplaces,FamilyTypes } from './OriginTables';


@Injectable()
export class OriginsService {

  constructor() { }

  getOrigins() {
  return this.GenerateOrigin();
  }
  GenerateOrigin() {
  //  var myOrigin  = new origin;
    var myOrigin = {
          ParentsKnown: this.GenerateParents(),
          Birthplace: this.GenerateBirthplace(),
          NumberofSiblings: this.GenerateNumberofSiblings(),
          Family: this.GenerateFamily()
       };
    return myOrigin;
  }

  GenerateParents(){
    var d = this.RollTheDice(100);
    return this.getTableItem(d,Parents);
  }
  GenerateBirthplace(){
    var d = this.RollTheDice(100);
    return this.getTableItem(d,Birthplaces);
  }
  GenerateNumberofSiblings(){
    //TODO: add race handling
    var d = this.RollTheDice(10);
    if (d <=2)
      return 0;
    else if(d >=3 && d <=4 )
      return this.RollTheDice(3);
    else if(d >=5 && d <=6 )
      return this.RollTheDice(4) + 1;
    else if(d >=7 && d <=8 )
      return this.RollTheDice(6) + 2;
    else
      return this.RollTheDice(8) + 3;
  }
  GenerateFamily(){
    var d = this.RollTheDice(100);
    return this.getTableItem(d,FamilyTypes);
  }


  RollTheDice(d) {
    return  Math.floor(Math.random() * d) + 1;
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
