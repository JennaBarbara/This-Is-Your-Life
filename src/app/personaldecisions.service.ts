import { Injectable } from '@angular/core';

import { GenericGenerate } from './Utilities';

import { personaldecisions } from './PersonalDecisions';

import { backgrounds, classes } from './PersonalDecisionsTables';

@Injectable()
export class PersonaldecisionsService {

  constructor() { }

  getPersonalDecisions(myBasics) {
    return this.GeneratePersonalDecisions(myBasics);
  }

  GeneratePersonalDecisions(myBasics){
    this.getReasonsTable(myBasics.Background, backgrounds);
    var myBackgroundTable = this.getReasonsTable(myBasics.Background, backgrounds);
    var myClassTable = this.getReasonsTable(myBasics.Class, classes);
    var myPersonalDecisions = new personaldecisions;
    myPersonalDecisions = {
         BackgroundReasons: GenericGenerate(myBackgroundTable),
         ClassReasons: GenericGenerate(myClassTable)
      };
    return myPersonalDecisions;
  }

  getReasonsTable( choice, options) {
    return options[choice];
  }

}
