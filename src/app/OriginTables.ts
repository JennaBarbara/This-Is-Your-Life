
export const Parents = {
"1-95":"You know who your parents are or were.",
"96-100":"You do not know who your parents were."
};

//TODO:add nonhuman parents tables

export const Birthplaces = {
"1-50":"Home",
"51-55":"Home of a family friend",
"56-63":"Home of a healer or midwife",
"64-65":"Carriage, cart, or wagon",
"66-68":"Barn, shed, or other outbuilding",
"69-70":"Cave",
"71-72":"Field",
"73-74":"Forest",
"75-77":"Temple",
"78":"Battlefield",
"79-80":"Alley or street",
"81-82":"Brothel, tavern, or inn",
"83-84":"Castle, keep, tower, or palace",
"85":"Sewer or rubbish heap",
"86-88":"Among people of a different race",
"89-91":"On board a boat or a ship",
"92-93":"In a prison or in the headquarters of a secret organization",
"94-95":"In a sage’s laboratory",
   "96":"In the Feywild",
   "97":"In the Shadowfell",
   "98":"On the Astral Plane or the Ethereal Plane",
   "99":"On an Inner Plane of your choice",
  "100":"On an Outer Plane of your choice"
};

export const FamilyTypes = {
  "1":"None",
  "2":"Institution, such as an asylum",
  "3":"Temple",
  "4-5":"Orphanage",
  "6-7":"Guardian",
  "8-15":"Paternal or maternal aunt, uncle, or both; or extended family such as a tribe or clan",
  "16-25":"Paternal or maternal grandparent(s)",
  "26-35":"Adoptive family (same or different race)",
  "36-55":"Single father or stepfather",
  "56-75":"Single mother or stepmother",
  "76-100":"Mother and father"
};

export const Alignments = {
  "3":["Chaotic evil","Chaotic neutral"],
  "4-5":"Lawful evil",
  "6-8":"Neutral evil",
  "9-12":"Neutral",
  "13-15":"Neutral good",
  "16-17":["Lawful good", "Lawful neutral"],
  "18":["Chaotic good", "Chaotic neutral"]
};

export const Occupations = {
  "1-5": "Academic",
  "06-10": "Adventurer", // TODO (roll on the Class table)
  "11": "Aristocrat",
  "12-26": "Artisan or guild member",
  "27-31": "Criminal",
  "32-36": "Entertainer",
  "37-38": "Exile, hermit, or refugee",
  "39-43": "Explorer or wanderer",
  "44-55": "Farmer or herder",
  "56-60": "Hunter or trapper",
  "61-75": "Laborer",
  "76-80": "Merchant",
  "81-35": "Politician or bureaucrat",
  "86-90": "Priest",
  "91-95": "Sailor",
  "96-100": "Soldier"
};
export const Races = {
  "1-40": "Human",
  "41-50": "Dwarf",
  "51-60": "Elf",
  "61-70": "Halfling",
  "71-75": "Dragonborn",
  "76-80": "Gnome",
  "81-85": "Half-elf",
  "86-90": "Half-orc",
  "91-95": "Tiefling",
  "96-100": "DM's choice" //TODO something weird with DM's choice. it flickers out on screen
};
export const Classes = {
  "1-7": "Barbarian",
  "8-14": "Bard",
  "15-29": "Cleric",
  "30-36": "Druid",
  "37-52": "Fighter",
  "53-58": "Monk",
  "59-64": "Paladin",
  "65-70": "Ranger",
  "71-84": "Rogue",
  "85-89": "Sorcerer",
  "90-94": "Warlock",
  "95-100": "Wizard"
};
export const CausesOfDeath = {
"1": "Unknown",
"2": "Murdered",
"3": "Killed in battle",
"4": "Accident related to class or occupation",
"5": "Accident unrelated to class or occupation",
"6-7": "Natural causes, such as disease or old age",
"8": "Apparent suicide",
"9": "Torn apart by an animal or a natural disaster",
"10": "Consumed by a monster",
"ll":"Executed for a crime or tortured to death",
"12":"Bizarre event, such as being hit by a meteorite, struck down by an angry god, or killed by a hatching slaad egg"
};
export const Statuses = {
  "3": CausesOfDeath, //TODO add death handling
  "4-5": "Missing or unknown",
  "6-8": "Alive, but doing poorly due to injury, financial trouble, or relationship difficulties",
  "9-12": "Alive and well",
  "l3-l5":"Alive and quite successful",
  "16-l7":"Alive and infamous",
  "18":"Alive and famous"
};

export const Relationships = {
  "3-4":"Hostile",
  "5-10" :"Friendly",
  "11-12":"Indifferent"
};
