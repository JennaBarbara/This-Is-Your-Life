
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
  "2" : "You encountered something magical. You were injured by the effect of a spell.",
  "3" : "You encountered something magical. You witnessed a powerful spell being cast by a cleric, a druid, a sorcerer, a warlock, or a wizard.",
  "4" : "You encountered something magical. You drank a potion (of the DM's choice).",
  "5" : "You encountered something magical. You found a spell scroll (of the DM's choice) and succeeded in casting the Spell it contained.",
  "6" : "You encountered something magical. You were affected by teleportation magic.",
  "7" : "You encountered something magical. You turned invisible for a time.",
  "8" : "You encountered something magical. You identified an illusion for what it was.",
  "9" : "You encountered something magical. You saw a creature being conjured by magic.",
  "10" : "diviner",//You encountered something magical. Your fortune was read by a diviner. Roll twice on the Life Events table, but don’t apply the results. Instead, the DM picks one event as a portent of your future (which might or might not come true).
  n : 1,
  d : 10
};

export const Boons =
{
  "1" : "You gained a bit of good fortune. A friendly wizard gave you a spell scroll containing one cantrip (of the DM's choice).",
  "2" : { event: "You gained a bit of good fortune. You saved the life of a commoner, who now owes you a life debt. This individual accompanies you on your travels and performs mundane tasks for you, but will leave if neglected, abused, or imperiled. Some details about this individual are as follows: ", Person : {  Occupation: "", Race: "", Alignment: ""}},
  "3" : "You gained a bit of good fortune. You found a riding horse.",
  "4" : "You gained a bit of good fortune. ou found some money. You have ld20 gp in addition to your regular starting funds.",
  "5" : "You gained a bit of good fortune. A relative bequeathed you a simple weapon of your choice.",
  "6" : "You gained a bit of good fortune. You found something interesting. You gain one additional trinket.",
  "7" : "You gained a bit of good fortune. You once performed a service for a local temple. The next time you visit the temple, you can receive healing up to your hit point maximum.",
  "8" : "You gained a bit of good fortune. A friendly alchemist gifted you with a potion of healing or a flask ofa cid, as you choose.",
  "9" : "You gained a bit of good fortune. You found a treasure map.",
  "10" : "You gained a bit of good fortune. A distant relative left you a stipend that enables you to live at the comfortable lifestyle for 1d20 years. lf you choose to live at a higher lifestyle, you reduce the price of the lifestyle by 2 gp during that time period.",
  n : 1,
  d : 10
};


export const Crimes =
{
  "1" : "You were accused of committing murder.",
  "2" : "You were accused of committing theft.",
  "3" : "You were accused of committing burglary.",
  "4" : "You were accused of committing assault.",
  "5" : "You were accused of committing smuggling.",
  "6" : "You were accused of committing a kidnapping.",
  "7" : "You were accused of committing extortion.",
  "8" : "You were accused of counterfeiting.",
  n : 1,
  d : 8
};


export const Punishments =
{
  "1-3" : "You did not commit the crime and were exonerated after being accused.",
  "4-6" : "You committed the crime or helped do so, but nonetheless the authorities found you not guilty.",
  "7-8" : "You were nearly caught in the act. You had to flee and are wanted in the community where the crime occurred.",
  "9-12" : "You were caught and convicted. You spent time in jail, chained to an oar, or performing hard labor. You served a sentence of 1d4 years or succeeded in escaping after that much time.",
  n : 1,
  d : 12
};

export const SuperNaturalEvents =
{
  "01-05"  : "You had a supernatural experience. You were ensorcelled by a fey and enslaved for 1d6 years before you escaped.",
  "06-10"  : "You had a supernatural experience. You saw a demon and ran away before it could do anything to you.",
  "11-15"  : "You had a supernatural experience. A devil tempted you. Make a DC 10 Wisdom saving throw. On a failed save, your alignment shifts one step toward evil (if it's not evil already), and you start the game with an additional 1d20 + 50 gp.",
  "16-20"  : "You had a supernatural experience. You woke up one morning miles from your home, with no idea how you got there.",
  "21-30"  : "You had a supernatural experience. You visited a holy site and felt the presence of the divine there.",
  "31-40"  : "You had a supernatural experience. You witnessed a falling red star, a face appearing in the frost, or some other bizarre happening. You are certain that it was an omen of some sort.",
  "41-50"  : "You had a supernatural experience. You witnessed a minor miracle.",
  "51-60"  : "You had a supernatural experience. You explored an empty house and found it to be haunted.",
  "61-70"  : "You had a supernatural experience. You were briefly possessed. Roll a d6 to determine what type of creature possessed you: 1, celestial; 2, devil; 3, demon; 4, fey; 5, elemental; 6, undead.",
  "71-75" : "You had a supernatural experience. You saw a ghost.",
  "76-80" : "You had a supernatural experience. You saw a ghoul feeding on a corpse.",
  "86-90"  : "You had a supernatural experience. A celestial or a fiend visited you in your dreams to give a warning of dangers to come.",
  "91-95" : "You had a supernatural experience. You briefly visited the Feywild or the Shadowfell.",
  "96-100" : "You had a supernatural experience. You saw a portal that you believe leads to another plane of existence.",
  n : 1,
  d : 100
};

export const Tragedies =
{
  "1-2" : { event: "You suffered a tragedy. A family member or a close friend died.", Death : "unknown"},
  "3" : "You suffered a tragedy. A friendship ended bitterly, and the other person is now hostile to you. The cause might have been a misunderstanding or something you or the former friend did.",
  "4" : "You suffered a tragedy. You lost all your possessions in a disaster, and you had to rebuild your life.",
  "5" : "You suffered a tragedy. You were imprisoned for a crime you didn’t commit and spent 1d6 years at hard labor, in jail, or shackled to an oar in a slave galley.",
  "6" : "You suffered a tragedy. War ravaged your home community, reducing everything to rubble and ruin. In the aftermath, you either helped your town rebuild or moved somewhere else.",
  "7" : "You suffered a tragedy. A lover disappeared without a trace. You have been looking for that person ever since.",
  "8" : "You suffered a tragedy. A terrible blight in your home community caused crops to fail, and many starved. You lost a sibling or some other family member.",
  "9" : "You suffered a tragedy. You did something that brought terrible shame to you in the eyes of your family. You might have been involved in a scandal, dabbled in dark magic, or offended someone important. The attitude of your family members toward you becomes indifferent at best, though they might eventually forgive you.",
  "10" : "You suffered a tragedy. For a reason you were never told, you were exiled from your community. You then either wandered in the wilderness for a time or promptly found a new place to live.",
  "11" : "You suffered a tragedy. A romantic relationship ended. Roll 3d6. An odd number means it ended with bad feelings, while an even number means it ended amicably.",
  "12" : { event: "You suffered a tragedy. A current or prospective romantic partner of yours died.", Death : "unknown"},
  n : 1,
  d : 12
};

export const War =
{
  "1" : "You fought in a battle. You were knocked out and left for dead. You woke up hours later with no recollection of the battle.",
  "2-3" : "You fought in a battle. You were badly injured in the fight, and you still bear the awful scars of those wounds.",
  "4" : "You fought in a battle. You ran away from the battle to save your life, but you still feel shame for your cowardice.",
  "5-7" : "You fought in a battle. You suffered only minor injuries, and the wounds all healed without leaving scars.",
  "8-9" : "You fought in a battle. You survived the battle, but you suffer from terrible nightmares in which you relive the experience.",
  "10-11" : "You fought in a battle. You escaped the battle unscathed, though many of your friends were injured or lost.",
  "12" : "You fought in a battle. You acquitted yoursel well in battle and are remembered as a hero. You might have received a medal for your bravery.",
  n : 1,
  d : 12
};

export const WeirdStuff =
{
  "1"  : "Something truly strange happened to you. You were turned into a toad and remained in that form for 1d4 weeks.",
  "2"  : "Something truly strange happened to you. You were petrified and remained a stone statue for a time until someone freed you.",
  "3"  : "Something truly strange happened to you. You were enslaved by a hag, a satyr, or some other being and lived in that creature’s thrall for 1d6 years.",
  "4"  : "Something truly strange happened to you. A dragon held you as a prisoner for 1d4 months until adventurers killed it.",
  "5"  : "Something truly strange happened to you. You were taken captive by a race of evil humanoids such as drow, kuo-toa, or quaggoths. You lived as a slave in the Underdark until you escaped.",
  "6"  : { event: "Something truly strange happened to you. You served a powerful adventurer as a hireling. You have only recently left that service. Some details about your former employer are as follows: ", Person : {  Occupation: "Adventurer", Race: "", Alignment: ""}},
  "7"  : "Something truly strange happened to you. You went insane for 1d6 years and recently regained your sanity. A tic or some other bit of odd behavior might linger.",
  "8"  : "Something truly strange happened to you. A lover of yours was secretly a silver dragon.",
  "9"  : "Something truly strange happened to you. You were captured by a cult and nearly sacrificed on an altar to the foul being the cultists served. You escaped, but you fear they will find you.",
  "10" : "Something truly strange happened to you. You met a demigod, an archdevil, an archfey, a demon lord, or a titan, and you lived to tell the tale.",
  "11" : "Something truly strange happened to you. You were swallowed by a giant fish and spent a month in its gullet before you escaped.",
  "12" : "Something truly strange happened to you. A powerful being granted you a wish, but you squandered it on something frivolous.",
  n : 1,
  d : 12
};



export const LifeEvents =
{
  "01-10" : Tragedies,
  "11-20" : Boons,
  "21-30" : { event: "You fell in love or got married. lf you get this result more than once, you can choose to have a child instead. Some details about your love interest or child are as follows: ", Person : {  Occupation: "", Race: "", Alignment: ""} },
  "31-40" : { event: "You made an enemy of an adventurer. Roll a d6. An odd number indicates you are to blame for the rift, and an even number indicates you are blameless. Some details about this enemy are as follows: ", Person : {  Occupation: "Adventurer", Race: "", Alignment: ""}},
  "41-50" : { event: "You made a friend of an adventurer. Some details about your friend are as follows: ", Person : {  Occupation: "Adventurer", Race: "", Alignment: ""}},
  "51-70" : "You spent time working in a job related to your background. Start the game with an extra 2d6 gp.",
  "71-75" : { event: "You met someone important. Some details about this person are as follows: ", Person : {  Occupation: "", Race: "", Alignment: ""}},
  "76-80" : Adventures,
  "81-85" : SuperNaturalEvents,
  "86-90" : War,
  "91-95" : "Crimes",
  "96-99" : ArcaneMatters,
  "100"   : WeirdStuff,
  n : 1,
  d : 100
};

export const CausesOfDeath = {
  "1": "They died of unknown causes.",
  "2": "They were murdered. Roll a d12. On a 1, you were responsible, whether directly or indirectly.",
  "3": "They were killed in battle.",
  "4": "They died in an accident related to class or occupation.",
  "5": "They died in an accident unrelated to class or occupation.",
  "6-7": "They died of natural causes, such as disease or old age.",
  "8": "They died in an apparent suicide.",
  "9": "They were torn apart by an animal or a natural disaster.",
  "10":"They were consumed by a monster.",
  "11":"They were executed for a crime or tortured to death.",
  "12":"They died in a bizarre event, such as being hit by a meteorite, struck down by an angry god, or killed by a hatching slaad egg.",
  n : 1,
  d : 12
};
