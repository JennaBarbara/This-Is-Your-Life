import { Injectable } from '@angular/core';

import {GenerateIndividual, GenerateAlignment, GenericGenerate, RollTheDice, RollMultipleDice, getTableItem } from './Utilities';
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
          Class: GenericGenerate(100, Classes),
          Race: GenericGenerate(100, Races),
       };
    return myBasics;
  }

}
