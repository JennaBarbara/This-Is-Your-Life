import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { OriginsComponent } from './origins/origins.component';
import { origin, individual } from './Origin';
import { Parents, Birthplaces,FamilyTypes, Alignments, Races, Classes, Occupations }
 from './OriginTables';


@Injectable()
export class OriginsService {

  constructor() { }

  getOrigins() {
  return this.GenerateOrigin();
  }
  GenerateOrigin() {
   var myOrigin  = new origin;

     myOrigin = {
          Class: this.GenerateClass(),
          Race: this.GenerateRace(),
          Occupation: this.GenerateOccupation(),
          Alignment: this.GenerateAlignment(),
          ParentsKnown: this.GenerateParents(),
          Birthplace: this.GenerateBirthplace(),
        //  Siblings: this.GenerateSiblings(),
          NumberofSiblings: this.GenerateNumberofSiblings(),
          Family: this.GenerateFamily()
       };
    return myOrigin;
  }

  GenerateAlignment(){
    var d = this.RollMultipleDice(3, 6);
    var result = this.getTableItem(d, Alignments);
    if (Array.isArray(result)) {
      d = this.RollTheDice(2);
      return result[(d-1)];
    }
    return result;
  }
  GenerateRace(){
    var d = this.RollTheDice(100);
    return this.getTableItem(d,Races);
  }
  GenerateClass(){
    var d = this.RollTheDice(100);
    return this.getTableItem(d,Classes);
  }
  GenerateOccupation(){
    var d = this.RollTheDice(100);
    return this.getTableItem(d,Occupations);
  }


  GenerateParents(){
    var d = this.RollTheDice(100);
    return this.getTableItem(d,Parents);
  }

  // GenerateSiblings(){
  //   number NumberofSiblings = this.GenerateNumberofSiblings();
  //
  // }

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
  RollMultipleDice(n, d) {
   var result = 0;
   for(var i=0; i<n; i++){
      result += this.RollTheDice(d);
    }
    return result;
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
