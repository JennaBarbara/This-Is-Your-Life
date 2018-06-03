export class origin {
  //Occupation:string;
  ParentsKnown: string;
  // ParentsRace: string;
  Birthplace: string;
  Mother: individual;
  Father: individual;
  Heritage: string;
  //NumberofSiblings: number;
  Siblings: sibling[];
  Family: string;
  FamilyWealth: string[];
  ChildhoodMemory: string;
  }
export class individual {
  Alignment: string;
  Occupation:string;
  Status:string;
}
export class sibling extends individual {
  BirthOrder: string;
  Relationship: string;
}
export class parent extends individual {
  Absence: string;
}
