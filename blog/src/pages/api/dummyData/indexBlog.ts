export interface Blog {
  id: number;
  title: string;
  short: string;
  fullText: string;
  fullText2: string;
  image: string;
  image2?: string;
  createdAt: string; // Add a createdAt field
}

const blogs = [
  {
    id: 1,
    title: "Mijn Eerste Week bij Contribute – Een Nieuwe Start",
    short:
      "Mijn stage bij Contribute is officieel begonnen! Het was een boeiende eerste week vol nieuwe ervaringen, kennismakingen en intensieve trainingen. Hier is een overzicht van mijn eerste dagen bij het bedrijf.",
    fullText:
      "Mijn eerste week bij Contribute was een spannende en leerzame ervaring. Op de eerste dag maakten we kennis met alle collega’s en kregen we onze laptops waarop we de nodige software installeerden. We kregen ook een eerste introductie in Oracle APEX, een platform dat binnen Contribute veel gebruikt wordt.De tweede, derde en vierde dag stonden in het teken van SQL en PL/SQL training. We leerden hoe databases werken, hoe we gegevens kunnen opvragen en bewerken met SQL en hoe we met PL/SQL geavanceerde databasefunctionaliteiten kunnen implementeren.",
    fullText2:
      "Het was een intensieve training, maar ik heb veel bijgeleerd over hoe databases in een professionele omgeving worden gebruikt. Op de vijfde dag kregen we een diepgaandere training in Oracle APEX. We leerden hoe we databasegestuurde webapplicaties kunnen bouwen en aanpassen zonder al te veel code te schrijven. Dit was erg interessant omdat we konden zien hoe snel en efficiënt applicaties kunnen worden ontwikkeld met deze technologie. Mijn eerste indruk van Contribute is zeer positief. Het team is vriendelijk en behulpzaam en de trainingen zijn goed gestructureerd en leerrijk. Ik kijk ernaar uit om de komende weken verder te groeien en meer praktijkervaring op te doen in SQL, PL/SQL en APEX.",
    image:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1738959785/ox0qaydupvrgfvei6kbc.jpg",
    image2: "",
    createdAt: "2025-02-07", // Add hardcoded date
  },
  {
    id: 2,
    title: "Mijn Tweede Week bij Contribute – Dieper in Oracle APEX",
    short:
      "De tweede week van mijn stage bij Contribute was gevuld met zelfstudie en verdieping in Oracle APEX. Ik leerde zelfstandig werken en kreeg een beter inzicht in het bouwen van een blogwebsite binnen APEX.",
    fullText:
      "Na een boeiende eerste week bij Contribute, waarin we de basis van Oracle APEX en SQL verkenden, doken we deze week dieper in de wereld van APEX. De focus lag vooral op zelfstudie en zelfstandig leren. Dit betekende dat we zelf op onderzoek uitgingen, documentatie doornamen en hands-on ervaring opdeden door met de tool te werken. Eén van de grootste uitdagingen van deze week was het bouwen van een blogwebsite in Oracle APEX. Dit gaf me niet alleen inzicht in hoe je een functionele webapplicatie opzet, maar ook in hoe APEX werkt als low-code ontwikkelplatform.",
    fullText2:
      "Ik leerde hoe ik pagina’s kon maken, data kon beheren en de interface kon aanpassen aan mijn wensen. Zelfstandig leren was een belangrijk aspect deze week. Het was soms uitdagend, maar het gaf me ook de kans om probleemoplossend te denken en dieper in de technologie te duiken. Al met al was het een leerzame week waarin ik meer vertrouwd raakte met Oracle APEX en hoe je een volledige applicatie kunt bouwen binnen dit platform. Ik kijk uit naar de volgende weken om mijn kennis verder uit te breiden en praktijkervaring op te doen!",
    image:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1739612393/channels4_profile_gu9fvc.jpg",
    createdAt: "2025-02-15",
  },
  {
    id: 3,
    title: "Start van het 4me-Tia Project",
    short: "Eerste stappen in het 4me-Tia project",
    fullText:
      "Deze week zijn we begonnen aan ons eerste project genaamd 4me-Tia. We hebben tickets aangemaakt in JIRA en verbinding gemaakt met de database. Het project draait om het ontwikkelen van APEX-schermen om administratieve taken te vereenvoudigen. We hebben gewerkt aan verschillende onderdelen van de applicatie. Eerst hebben we de loginpagina opgezet om ervoor te zorgen dat beheerders veilig kunnen inloggen. Daarna hebben we de pagina gemaakt waar een organisatie gekozen kan worden, zodat alleen relevante gegevens worden weergegeven. Vervolgens hebben we de medewerkerspagina ontwikkeld om een overzicht te tonen van alle werknemers binnen een organisatie en een klantenpagina om alle klanten weer te geven.",
    fullText2:
      "Daarnaast hebben we gewerkt aan de weekdagenkalender waarin werkuren voor organisaties of klanten kunnen worden gedefinieerd en de feestdagenkalender om feestdagen toe te voegen en te beheren. Dit was mijn eerste ervaring met een echt IT-project waarbij we JIRA gebruikten voor ticketbeheer en direct met de database werkten. Ik heb geleerd hoe data verwerkt wordt en hoe APEX-schermen worden gestructureerd voor een betere gebruikerservaring. Ik kijk ernaar uit om verder te werken aan dit project en mijn kennis verder uit te breiden.",
    image:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1740256929/managing-time-l_wswbsj.webp",
    createdAt: "2025-02-22",
  },
  {
    id: 4,
    title: "Verder werken aan de Holiday Calendar",
    short: "Holiday Calendar bewerkbaar maken en werken met SQL Views",
    fullText:
      "Deze week heb ik verder gewerkt aan de Holiday Calendar en ervoor gezorgd dat deze nu bewerkbaar en verwijderbaar is. Mijn belangrijkste taak was het selecteren van een specifieke klant binnen een organisatie en vervolgens de bijbehorende vakantiekalendergegevens weergeven. Als er geen klantgebonden vakantiedata beschikbaar waren, moest in plaats daarvan de vakantiedata van de organisatie zelf worden getoond. Daarnaast moesten we views maken voor alle gegevens en deze gebruiken om data weer te geven in APEX",
    fullText2:
      "Tijdens dit proces heb ik veel geleerd, vooral over werken met APEX, enkele handige trucs in SQL en hoe je views maakt in SQL om data efficiënter te beheren en op te halen. Dit was een leerzame week waarin ik mijn technische vaardigheden verder heb kunnen ontwikkelen. Ik kijk ernaar uit om mijn kennis nog verder te verdiepen in de komende weken! 🚀",
    image:
      "https://res-console.cloudinary.com/dl3qqfbrh/thumbnails/v1/image/upload/v1740995060/cGhvdG8tMTYzMzUyNjU0MzgxNC05NzE4Yzg5MjJiN2FfdWVjdXFv/preview",
    image2:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1740995068/WhatsApp_Image_2025-03-03_at_10.15.48_04a94d70_tub520.jpg",
    createdAt: "2025-03-03",
  },
];

export const getBlogs = (): Blog[] => {
  return blogs;
};

export const getBlogById = (id: number): Blog | undefined => {
  return blogs.find((blog) => blog.id === id);
};
