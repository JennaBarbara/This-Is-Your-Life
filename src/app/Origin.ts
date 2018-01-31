export class origin {
  Alignment: string;
  Occupation:string;
  ParentsKnown: string;
  // ParentsRace: string;
  Birthplace: string;
  // Parents: individual[];
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
