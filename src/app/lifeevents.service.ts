import { Injectable } from '@angular/core';

import { GenericGenerate, RollMultipleDice } from './Utilities';

import { StartingAges } from './LifeEventTables';

@Injectable()
export class LifeeventsService {

  constructor() { }

  getLifeEvents(myBasics) {
    return this.GenerateLifeEvents(myBasics);
  }

  GenerateLifeEvents(myBasics){

    //var age = this.generateAge(myBasics);
    // var myClassTable = this.getReasonsTable(myBasics.Class, classes);
    // var myPersonalDecisions = new personaldecisions;
    // myPersonalDecisions = {
    //      BackgroundReasons: GenericGenerate(myBackgroundTable),
    //      ClassReasons: GenericGenerate(myClassTable)
    //   };
    // return myPersonalDecisions;

    return 0;
  }

  generateAge(myBasics) {
    var AgeTable =  StartingAges[myBasics.Race];
    if(myBasics.Class == "Barbarian" || myBasics.Class == "Rogue" || myBasics.Class == "Sorcerer" || myBasics.Class == "Warlock")
    {
      return  AgeTable.adult + RollMultipleDice(AgeTable.typeA.n, AgeTable.typeA.d);
    }
    else if(myBasics.Class == "Bard" || myBasics.Class == "Fighter" || myBasics.Class == "Paladin" || myBasics.Class == "Ranger")
    {
      return  AgeTable.adult + RollMultipleDice(AgeTable.typeB.n, AgeTable.typeB.d);
    }
    else if(myBasics.Class == "Cleric" || myBasics.Class == "Druid" || myBasics.Class == "Monk" || myBasics.Class == "Wizard")
    {
      return AgeTable.adult + RollMultipleDice(AgeTable.typeC.n, AgeTable.typeC.d);
    }
    return 0;
  }

}
