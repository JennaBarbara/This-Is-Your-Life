import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { OriginsComponent } from './origins/origins.component';
import { origin, individual } from './Origin';
import { Parents, Birthplaces,FamilyTypes, Alignments, Races, Classes, Occupations, ChildhoodMemories, FamilyLifestyles, FamilyHomes }
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
          Class: this.GenericGenerate(100, Classes),
          Race: this.GenericGenerate(100, Races),
          Occupation: this.GenerateOccupation(),
          Alignment: this.GenerateAlignment(),
          ParentsKnown: this.GenericGenerate(100, Parents),
          Birthplace: this.GenericGenerate(100, Birthplaces),
        //  Siblings: this.GenerateSiblings(),
          NumberofSiblings: this.GenerateNumberofSiblings(),
          Family: this.GenericGenerate(100, FamilyTypes),
          FamilyWealth: this.GenerateFamilyWealth(),
          ChildhoodMemory: this.GenerateChildhood()
       };
    return myOrigin;
  }
  GenericGenerate(n, table){
    var d = this.RollTheDice(n);
    return this.getTableItem(d,table);
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

  GenerateChildhood(){
    var d = this.RollMultipleDice(3, 6);
    return this.getTableItem(d, ChildhoodMemories);
  }
  GenerateFamilyWealth(){
    var d = this.RollMultipleDice(3, 6);
    var wealth = this.getTableItem(d, FamilyLifestyles);
    var home = this.GenerateChildhoodHome(wealth[1]);
    return [wealth[0], home];
  }

  GenerateChildhoodHome(wealth){
    var d = this.RollTheDice(100) + Number(wealth);
    if (d<0)
      d=0;
    else if (d>111)
      d=111;
    return this.getTableItem(d,FamilyHomes);

  }

  GenerateOccupation(){
    var d = this.RollTheDice(100);
    return this.getTableItem(d,Occupations);
  }
  // GenerateSiblings(){
  //   number NumberofSiblings = this.GenerateNumberofSiblings();
  //
  // }

  GenerateNumberofSiblings(){
    //TODO: add race handlin
    //alert(this.myOrigin.Race);
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
