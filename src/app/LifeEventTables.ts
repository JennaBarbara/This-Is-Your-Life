
export const HumanishAges =
{
  adult : 15,
  typeA : { n: 1, d: 4},
  typeB :{ n: 1, d: 4},
  typeC :{ n: 2, d: 6}
};

export const DwarfAges =
{
  adult : 40,
  typeA : { n: 3, d: 6},
  typeB :{ n: 5, d: 6},
  typeC :{ n: 7, d: 6}
};

export const ElfAges =
{
  adult : 110,
  typeA : { n: 4, d: 6},
  typeB :{ n: 6, d: 6},
  typeC :{ n: 10, d: 6}
};

export const GnomeAges =
{
  adult : 40,
  typeA : { n: 4, d: 6},
  typeB :{ n: 6, d: 6},
  typeC :{ n: 9, d: 6}
};

export const HalfElfAges =
{
  adult : 20,
  typeA : { n: 1, d: 6},
  typeB :{ n: 2, d: 6},
  typeC :{ n: 3, d: 6}
};

export const HalfOrcAges =
{
  adult : 14,
  typeA : { n: 1, d: 4},
  typeB :{ n: 1, d: 6},
  typeC :{ n: 2, d: 6}
};

export const HalflingAges =
{
  adult : 20,
  typeA : { n: 2, d: 4},
  typeB :{ n: 3, d: 6},
  typeC :{ n: 4, d: 6}
};

export const StartingAges =
{
  "Human" :  HumanishAges,
  "Dragonborn" : HumanishAges,
  "Tiefling" :  HumanishAges,
  "Dwarf" : DwarfAges,
  "Elf" : ElfAges,
  "Halfling" : HalflingAges,
  "Gnome" : GnomeAges,
  "Half-elf" : HalfElfAges,
  "Half-orc" : HalfOrcAges
};

export const Adventures =
{
  "01-10" : "You went on an adventure. You nearly died. You have nasty scars on your body, and you are missing an ear, 1d3 fingers, or 1d4 toes.",
  "11-20" : "You went on an adventure. You suffered a grievous injury. Although the wound healed, it still pains you from time to time.",
  "21-30" : "You went on an adventure. You were wounded, but in time you fully recovered.",
  "31-40" : "You went on an adventure. You contracted a disease while exploring a filthy warren. You recovered from the disease, but you have a persistent cough, pockmarks on your skin, or prematurely gray hair.",
  "41-50" : "You went on an adventure. You were poisoned by a trap or a monster. You recovered, but the next time you must make a saving throw against poison, you make the saving throw with disadvantage.",
  "51-60" : "You went on an adventure. You lost something of sentimental value to you during your adventure. Remove one trinket from your possessions.",
  "61-70" : "You went on an adventure. You were terribly frightened by something you encountered and ran away, abandoning your companions to their fate.",
  "71-80" : "You went on an adventure. You learned a great deal during your adventure. The next time you make an ability check or a saving throw, you have advantage on the roll.",
  "81-90" : "You went on an adventure. You found some treasure on your adventure. Youhave 2d6 gp left from your share of it.",
  "91-99" : "You went on an adventure. You found a considerable amount of treasure on your adventure. You have ld20 + 50 gp left from your share of it.",
  "100" : "You went on an adventure. You came across a common magic item (of the DM’s choice).",
  n : 1,
  d : 100
};

export const ArcaneMatters =
{
  "1" : "You encountered something magical. You were charmed or frightened by a spell.",
  "2" : "You encountered something magical. You were injured by the effect ofa spell.",
  "3" : "You encountered something magical. You witnessed a powerful spell being cast by a cleric, a druid, a sorcerer, a warlock, or a wizard.",
  "4" : "You encountered something magical. You drank a potion (of the DM's choice).",
  "5" : "You encountered something magical. You found a spell scroll (of the DM's choice) and succeeded in casting the Spell it contained.",
  "6" : "You encountered something magical. You were affected by teleportation magic.",
  "7" : "You encountered something magical. You turned invisible for a time.",
  "8" : "You encountered something magical. You identified an illusion for what it was.",
  "9" : "You encountered something magical. You saw a creature being conjured by magic.",
  "10" : "You encountered something magical. Your fortune was read by a diviner. Roll twice on the Life Events table, but don’t apply the results. Instead, the DM picks one event as a portent of your future (which might or might not come true).",
  n : 1,
  d : 100
};

export const Boons =
{
  "1" : "",
  "2" : "",
  "3" : "",
  "4" : "",
  "5" : "",
  "6" : "",
  "7" : "",
  "8" : "",
  "9" : "",
  "10" : "",
  n : 1,
  d : 100
};

export const LifeEvents =
{
  "01-10" : "You suffered a tragedy. Roll on the Tragedies table.",
  "11-20" : "You gained a bit of good fortune. Roll on the Boons table.",
  "21-30" : "",
  "31-40" : "",
  "41-50" : "",
  "51-70" : "",
  "71-75" : "",
  "76-80" : "",
  "81-85" : "",
  "86-90" : "",
  "91-95" : "",
  "96-99" : "",
  "100" : "",
  n : 1,
  d : 100
};
