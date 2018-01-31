import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { OriginsComponent } from './origins/origins.component';
import { origin, individual } from './Origin';
import {GenerateIndividual, GenerateAlignment, GenericGenerate,  RollTheDice, RollMultipleDice, getTableItem } from './Utilities';
import { Parents, Birthplaces,FamilyTypes, Alignments, Races, Classes, Occupations, ChildhoodMemories, FamilyLifestyles, FamilyHomes }
 from './OriginTables';


@Injectable()
export class OriginsService {

  constructor() { }

  getOrigins(myBasics) {
  return this.GenerateOrigin(myBasics);
  }
  GenerateOrigin(myBasics ) {
   var myOrigin  = new origin;

     myOrigin = {
          Occupation: GenericGenerate(100, Occupations),
          Alignment: GenerateAlignment(),
          ParentsKnown: GenericGenerate(100, Parents),
          Birthplace: GenericGenerate(100, Birthplaces),
          Siblings: this.GenerateSiblings(myBasics.Race),
        //  NumberofSiblings: this.GenerateNumberofSiblings(myBasics.Race),
          Family: GenericGenerate(100, FamilyTypes),
          FamilyWealth: this.GenerateFamilyWealth(),
          ChildhoodMemory: this.GenerateChildhood()
       };
    return myOrigin;
  }

  GenerateChildhood(){
    var d = RollMultipleDice(3, 6);
    return getTableItem(d, ChildhoodMemories);
  }
  GenerateFamilyWealth(){
    var d = RollMultipleDice(3, 6);
    var wealth = getTableItem(d, FamilyLifestyles);
    var home = this.GenerateChildhoodHome(wealth[1]);
    return [wealth[0], home];
  }

  GenerateChildhoodHome(wealth){
    var d = RollTheDice(100) + Number(wealth);
    if (d<0)
      d=0;
    else if (d>111)
      d=111;
    return getTableItem(d,FamilyHomes);

  }

  GenerateSiblings(race){
    var NumberofSiblings = this.GenerateNumberofSiblings(race);
    // if(NumberofSiblings == 0)
    //   return "No Siblings"
    var siblings = [];
    for (var i = 0; i < NumberofSiblings; i++) {
      siblings.push(GenerateIndividual());
    }
   return siblings;
  }

  GenerateNumberofSiblings(race){
    var raceModifier=0;
    if(race == "Dwarf" || race == "Elf" )
      raceModifier= -2;

    var d = RollTheDice(10) + raceModifier;
    if (d <=2)
      return 0;
    else if(d >=3 && d <=4 )
      return RollTheDice(3);
    else if(d >=5 && d <=6 )
      return RollTheDice(4) + 1;
    else if(d >=7 && d <=8 )
      return RollTheDice(6) + 2;
    else
      return RollTheDice(8) + 3;
  }

}
