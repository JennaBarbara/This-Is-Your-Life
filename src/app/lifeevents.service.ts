import { Injectable } from '@angular/core';

import { GenericGenerate, RollMultipleDice } from './Utilities';
import { Life } from './LifeEvent';
import { StartingAges, LifeEvents } from './LifeEventTables';

@Injectable()
export class LifeeventsService {

  constructor() { }

  getLifeEvents(myBasics) {
    return this.GenerateLifeEvents(myBasics);
  }

  GenerateLifeEvents(myBasics){

    var age = this.generateAge(myBasics);
    var myLife = new Life;
    myLife = {
         Age: age,
         Events: this.generateEvents(age)
      };
    return myLife;
  }

 generateEvents(age) {
   var NumberOfEvents = this.generateNumberOfEvents(age);
   console.log(NumberOfEvents);

   var Events = new Array();
   for( var i = 0; i < NumberOfEvents; i++ ) {
        var event = GenericGenerate( LifeEvents );
        if(event == "diviner"){
          event = "Your fortune was read by a diviner. The diviner saw the following in your future: " + GenericGenerate( LifeEvents );
        }
        Events.push( event );
   }
   return Events;
  // return NumberOfEvents;
 }

 generateNumberOfEvents(age) {
    if( age < 20) {
      return 1;
    }
    else if(age < 30)
    {
      return RollMultipleDice(1, 4);
    }
    else if(age < 40)
    {
      return RollMultipleDice(1, 6);
    }
    else if(age < 50)
    {
      return RollMultipleDice(1, 8);
    }
    else if(age < 60)
    {
      return RollMultipleDice(1, 10);
    }
      return RollMultipleDice(1, 12);
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
