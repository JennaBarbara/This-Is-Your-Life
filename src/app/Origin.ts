export class origin {
  Race: string;
  Class: string;
  Alignment: string;
  Occupation:string;
  ParentsKnown: string;
  // ParentsRace: string;
  Birthplace: string;
  // Parents: individual[];
  NumberofSiblings: number;
  // Siblings: sibling[];
   Family: string;
  // FamilyLifestyle: string;
  // ChildhoodHome: string;
  // ChildhoodMemories: string;
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
