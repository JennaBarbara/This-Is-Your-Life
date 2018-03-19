import { Injectable } from '@angular/core';

import {GenerateIndividual, GenerateAlignment, GenericGenerate, RollTheDice, RollMultipleDice, getTableItem } from './Utilities';
import { basics } from './Basics';
import { Races, Classes, Alignments } from './OriginTables';

@Injectable()
export class BasicsService {

  constructor() { }

  getBasics() {
  return this.GenerateBasics();
  }
  GenerateBasics() {
   var myBasics  = new basics;

     myBasics = {
          Class: GenericGenerate(Classes),
          Race: GenericGenerate( Races),
          Alignment: GenericGenerate( Alignments )
       };
    return myBasics;
  }

}
