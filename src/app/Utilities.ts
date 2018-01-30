
import { origin, individual } from './Origin';
import { Parents, Statuses, Birthplaces,FamilyTypes, Alignments, Races, Classes, Occupations, ChildhoodMemories, FamilyLifestyles, FamilyHomes, CausesOfDeath }
 from './OriginTables';


export function GenerateIndividual(){
  var myIndividual = new individual;
  myIndividual = {
    Alignment: GenerateAlignment(),
    Occupation: GenericGenerate(100, Occupations),
    Status: GenerateStatus()

  }
  return myIndividual
}

export function GenerateAlignment(){
  var d = RollMultipleDice(3, 6);
  var result = getTableItem(d, Alignments);
  if (Array.isArray(result)) {
    d = RollTheDice(2);
    return result[(d-1)];
  }
  return result;
}

export function GenerateStatus(){
  var d = RollMultipleDice(3, 6);
  var result = getTableItem(d, Statuses);
  if (result=="Dead") {
    d = RollTheDice(12);
    return "Dead, death caused by: " + getTableItem(d,CausesOfDeath);
  }
  return result;
}

export function GenericGenerate(n, table){
  var d = RollTheDice(n);
  return getTableItem(d,table);
}

export function RollTheDice(d) {
  return  Math.floor(Math.random() * d) + 1;
}

export function RollMultipleDice(n, d) {
 var result = 0;
 for(var i=0; i<n; i++){
    result += RollTheDice(d);
  }
  return result;
}

export function getTableItem(d,table) {
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
