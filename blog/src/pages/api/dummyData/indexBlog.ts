export interface Blog {
  id: number;
  title: string;
  short: string;
  categories: string[];
  fullText: string;
  fullText2: string;
  image: string;
  image2?: string;
  image3?: string;
  createdAt: string; // Add a createdAt field
  authorName: string;
  authorImage: string;
}

const blogs = [
  {
    id: 1,
    title: "Mijn Eerste Week bij Contribute – Een Nieuwe Start",
    short:
      "Mijn stage bij Contribute is officieel begonnen! Het was een boeiende eerste week vol nieuwe ervaringen, kennismakingen en intensieve trainingen. Hier is een overzicht van mijn eerste dagen bij het bedrijf.",
    categories: ["Internship", "Learning", "Training"],
    fullText:
      "Mijn eerste week bij Contribute was een spannende en leerzame ervaring. Op de eerste dag maakten we kennis met alle collega’s en kregen we onze laptops waarop we de nodige software installeerden. We kregen ook een eerste introductie in Oracle APEX, een platform dat binnen Contribute veel gebruikt wordt.De tweede, derde en vierde dag stonden in het teken van SQL en PL/SQL training. We leerden hoe databases werken, hoe we gegevens kunnen opvragen en bewerken met SQL en hoe we met PL/SQL geavanceerde databasefunctionaliteiten kunnen implementeren.",
    fullText2:
      "Het was een intensieve training, maar ik heb veel bijgeleerd over hoe databases in een professionele omgeving worden gebruikt. Op de vijfde dag kregen we een diepgaandere training in Oracle APEX. We leerden hoe we databasegestuurde webapplicaties kunnen bouwen en aanpassen zonder al te veel code te schrijven. Dit was erg interessant omdat we konden zien hoe snel en efficiënt applicaties kunnen worden ontwikkeld met deze technologie. Mijn eerste indruk van Contribute is zeer positief. Het team is vriendelijk en behulpzaam en de trainingen zijn goed gestructureerd en leerrijk. Ik kijk ernaar uit om de komende weken verder te groeien en meer praktijkervaring op te doen in SQL, PL/SQL en APEX.",
    image:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1738959785/ox0qaydupvrgfvei6kbc.jpg",
    image2: "",
    createdAt: "2025-02-07",
    authorName: "Shreejan Joshi",
    authorImage:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1738960869/IMG_3150_web_gmcitd.png",
  },
  {
    id: 2,
    title: "Mijn Tweede Week bij Contribute – Dieper in Oracle APEX",
    short:
      "De tweede week van mijn stage bij Contribute was gevuld met zelfstudie en verdieping in Oracle APEX. Ik leerde zelfstandig werken en kreeg een beter inzicht in het bouwen van een blogwebsite binnen APEX.",
    categories: ["Internship", "Oracle APEX", "Self-Study"],
    fullText:
      "Na een boeiende eerste week bij Contribute, waarin we de basis van Oracle APEX en SQL verkenden, doken we deze week dieper in de wereld van APEX. De focus lag vooral op zelfstudie en zelfstandig leren. Dit betekende dat we zelf op onderzoek uitgingen, documentatie doornamen en hands-on ervaring opdeden door met de tool te werken. Eén van de grootste uitdagingen van deze week was het bouwen van een blogwebsite in Oracle APEX. Dit gaf me niet alleen inzicht in hoe je een functionele webapplicatie opzet, maar ook in hoe APEX werkt als low-code ontwikkelplatform.",
    fullText2:
      "Ik leerde hoe ik pagina’s kon maken, data kon beheren en de interface kon aanpassen aan mijn wensen. Zelfstandig leren was een belangrijk aspect deze week. Het was soms uitdagend, maar het gaf me ook de kans om probleemoplossend te denken en dieper in de technologie te duiken. Al met al was het een leerzame week waarin ik meer vertrouwd raakte met Oracle APEX en hoe je een volledige applicatie kunt bouwen binnen dit platform. Ik kijk uit naar de volgende weken om mijn kennis verder uit te breiden en praktijkervaring op te doen!",
    image:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1739612393/channels4_profile_gu9fvc.jpg",
    createdAt: "2025-02-15",
    authorName: "Shreejan Joshi",
    authorImage:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1738960869/IMG_3150_web_gmcitd.png",
  },
  {
    id: 3,
    title: "Start van het 4me-Tia Project",
    short: "Eerste stappen in het 4me-Tia project",
    categories: ["Internship", "Project Work", "Database"],
    fullText:
      "Deze week zijn we begonnen aan ons eerste project genaamd 4me-Tia. We hebben tickets aangemaakt in JIRA en verbinding gemaakt met de database. Het project draait om het ontwikkelen van APEX-schermen om administratieve taken te vereenvoudigen. We hebben gewerkt aan verschillende onderdelen van de applicatie. Eerst hebben we de loginpagina opgezet om ervoor te zorgen dat beheerders veilig kunnen inloggen. Daarna hebben we de pagina gemaakt waar een organisatie gekozen kan worden, zodat alleen relevante gegevens worden weergegeven. Vervolgens hebben we de medewerkerspagina ontwikkeld om een overzicht te tonen van alle werknemers binnen een organisatie en een klantenpagina om alle klanten weer te geven.",
    fullText2:
      "Daarnaast hebben we gewerkt aan de weekdagenkalender waarin werkuren voor organisaties of klanten kunnen worden gedefinieerd en de feestdagenkalender om feestdagen toe te voegen en te beheren. Dit was mijn eerste ervaring met een echt IT-project waarbij we JIRA gebruikten voor ticketbeheer en direct met de database werkten. Ik heb geleerd hoe data verwerkt wordt en hoe APEX-schermen worden gestructureerd voor een betere gebruikerservaring. Ik kijk ernaar uit om verder te werken aan dit project en mijn kennis verder uit te breiden.",
    image:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1740256929/managing-time-l_wswbsj.webp",
    createdAt: "2025-02-22",
    authorName: "Shreejan Joshi",
    authorImage:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1738960869/IMG_3150_web_gmcitd.png",
  },
  {
    id: 4,
    title: "Verder werken aan de Holiday Calendar",
    short: "Holiday Calendar bewerkbaar maken en werken met SQL Views",
    categories: ["Internship", "Oracle APEX", "SQL"],
    fullText:
      "Deze week heb ik verder gewerkt aan de Holiday Calendar en ervoor gezorgd dat deze nu bewerkbaar en verwijderbaar is. Mijn belangrijkste taak was het selecteren van een specifieke klant binnen een organisatie en vervolgens de bijbehorende vakantiekalendergegevens weergeven. Als er geen klantgebonden vakantiedata beschikbaar waren, moest in plaats daarvan de vakantiedata van de organisatie zelf worden getoond. Daarnaast moesten we views maken voor alle gegevens en deze gebruiken om data weer te geven in APEX",
    fullText2:
      "Tijdens dit proces heb ik veel geleerd, vooral over werken met APEX, enkele handige trucs in SQL en hoe je views maakt in SQL om data efficiënter te beheren en op te halen. Dit was een leerzame week waarin ik mijn technische vaardigheden verder heb kunnen ontwikkelen. Ik kijk ernaar uit om mijn kennis nog verder te verdiepen in de komende weken! 🚀",
    image:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1740995060/photo-1633526543814-9718c8922b7a_uecuqo.avif",
    image2:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1740995068/WhatsApp_Image_2025-03-03_at_10.15.48_04a94d70_tub520.jpg",
    createdAt: "2025-03-03",
    authorName: "Shreejan Joshi",
    authorImage:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1738960869/IMG_3150_web_gmcitd.png",
  },
  {
    id: 5,
    title: "Verbeteringen aan de Lay-out en Nieuwe Functionaliteiten",
    short: "UI verbeteringen en API-integratie",
    categories: ["Internship", "UI/UX Design", "API Development"],
    fullText:
      "Deze week hebben we voornamelijk gewerkt aan het verbeteren van de lay-out en look & feel van de applicatie. We hebben een logo toegevoegd, de kleuren aangepast en ervoor gezorgd dat de interface er visueel aantrekkelijker en professioneler uitziet. Voor de ontwerpconcepten hebben we inspiratie gehaald van de website van de Three-Headed Giant, wat hielp bij het bepalen van de stijl en structuur van de applicatie.",
    fullText2:
      "Naast de UI-verbeteringen zijn we begonnen met een nieuw ticket, waarin we een knop op elke pagina moesten implementeren. Wanneer deze knop wordt ingedrukt, roept de applicatie een API aan om data op te halen. Dit proces is nog in ontwikkeling en wordt verder uitgewerkt. Daarnaast wordt momenteel het datamodel geüpdatet, wat betekent dat we mogelijk onze Weekday Calendar en Holiday Calendar pagina’s moeten aanpassen om compatibel te blijven met de nieuwe structuur. Dit was een leerzame week waarin ik niet alleen meer inzicht kreeg in UI-ontwerp, maar ook in API-integraties en hoe deze data efficiënt kunnen ophalen. Ik kijk uit naar de komende weken om dit verder uit te werken! 🚀",
    image:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1741526625/photo-1573867639040-6dd25fa5f597_hgzwgr.avif",
    image2:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1741526631/WhatsApp_Image_2025-03-08_at_18.56.19_a938f668_ecnzy9.jpg",
    image3:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1741526641/WhatsApp_Image_2025-03-08_at_18.57.40_62b0ff40_utjr7b.jpg",
    createdAt: "2025-03-08",
    authorName: "Shreejan Joshi",
    authorImage:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1738960869/IMG_3150_web_gmcitd.png",
  },
  {
    id: 6,
    title: "Beveiliging van de Applicatie en Rolbeheer",
    short: "Rollen, rechten en gebruikersbeheer instellen",
    categories: ["Internship", "Security", "User Management", "Data Modeling"],
    fullText:
      "Deze week stond volledig in het teken van de beveiliging van de applicatie. Mijn taak was om ervoor te zorgen dat alleen gebruikers met de juiste rechten toegang krijgen tot specifieke pagina’s, zoals de beveiligingspagina waar gebruikers kunnen worden beheerd. Hiervoor heb ik eerst een datamodel ontworpen, dat duidelijk maakt welke gebruiker tot welke organisatie behoort en welke rol hij of zij daarin heeft. Daarna heb ik de bijbehorende tabellen aangemaakt en gevuld met testdata. Op basis daarvan kon ik de Security Page bouwen. Op deze pagina zie je een overzicht van alle gebruikers, hun rollen en de organisaties waartoe ze toegang hebben.",
    fullText2:
      "We hebben drie rollen gedefinieerd: Super Administrator heeft toegang tot alle pagina’s en kan ook nieuwe gebruikers aanmaken van elk type. Company Administrator heeft toegang tot alle pagina’s, behalve de rolbeheerpagina, en kan Company Users aanmaken. Company User heeft beperkte toegang en kan geen toegang krijgen tot de beveiligingspagina. Met dit systeem zorgen we ervoor dat elke gebruiker enkel toegang krijgt tot wat hij nodig heeft. Dit was een belangrijke stap richting een veilige en schaalbare applicatie. Ik heb deze week veel geleerd over rolgebaseerde toegang, het opzetten van een data-driven securitymodel en het koppelen van gebruikers aan organisaties en permissies.",
    image:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1742637936/photo-1614064641938-3bbee52942c7_rggooa.avif",
    image2:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1742637914/WhatsApp_Image_2025-03-22_at_10.46.36_a9968fde_fkog5s.jpg",
    image3:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1742637922/WhatsApp_Image_2025-03-22_at_10.47.37_fcef5ce8_fhwic2.jpg",
    createdAt: "2025-03-15",
    authorName: "Shreejan Joshi",
    authorImage:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1738960869/IMG_3150_web_gmcitd.png",
  },
  {
    id: 7,
    title: "Security Page Uitbreiden en Super Admin Logica",
    short: "Beveiliging uitbreiden en automatische organisatiekoppeling",
    categories: ["Internship", "Security", "Triggers", "Bug Fixing", "Demo"],
    fullText:
      "Deze week heb ik verder gewerkt aan de security pagina, met de focus op het verbeteren van het design en de gebruikerservaring. Een belangrijk onderdeel was het automatiseren van de organisatiekoppeling voor gebruikers met de rol 'Super Administrator'. Hiervoor heb ik een trigger geschreven die, zodra een gebruiker deze rol krijgt, automatisch alle beschikbare organisaties koppelt aan deze gebruiker. Hierdoor krijgt een super admin altijd toegang tot alles, zonder handmatig extra instellingen te doen.",
    fullText2:
      "We hebben deze week ook een demo van de applicatie gepresenteerd. Normaal krijgen we na een demo een ticket voor een nieuw project, maar dit keer kwamen er enkele verbeterpunten naar boven. We hebben gewerkt aan het oplossen van kleine bugs en het toevoegen van enkele 'nice to have'-functionaliteiten die de applicatie gebruiksvriendelijker en stabieler maken. Het was een nuttige week waarin ik mijn kennis over triggers, gebruikersbeheer en feedbackverwerking heb kunnen versterken.",
    image:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1742640802/WhatsApp_Image_2025-03-22_at_11.26.26_a44eec0d_krmkwv.jpg",
    image2:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1742640791/WhatsApp_Image_2025-03-22_at_11.26.25_bff9cffb_r7j0gg.jpg",
    image3:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1742640822/WhatsApp_Image_2025-03-22_at_11.26.26_d163dc4d_g61he2.jpg",
    createdAt: "2025-03-22",
    authorName: "Shreejan Joshi",
    authorImage:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1738960869/IMG_3150_web_gmcitd.png",
  },
  {
    id: 8,
    title: "Nieuw Project: Gesprekken Module en Documentenfunctionaliteit",
    short: "Document upload/download + technische analyse eerste project",
    categories: [
      "Internship",
      "New Project",
      "File Upload",
      "Feature Development",
      "Client Feedback",
    ],
    fullText:
      "Deze week zijn we gestart met een nieuw project waarin we bestaande functionaliteiten moesten uitbreiden. Het project is een gesprekkenmodule waar HR/coördinatoren gesprekken met werknemers kunnen inplannen. Mijn taak was om ervoor te zorgen dat bij het aanmaken van een gesprek documenten zoals Word, PDF of Excel kunnen worden toegevoegd. Deze bijlagen moeten bij het gesprek bewaard worden en consulteerbaar zijn, en bij klikken openen in een aparte tab. Daarnaast heb ik ervoor gezorgd dat gebruikers de toegevoegde bestanden ook kunnen downloaden.",
    fullText2:
      "Op donderdag hadden we ook een technische analyse meeting met onze stagebegeleider over het eerste project (4ME-TIA) om te controleren of alles correct werkt. We hebben enkele bugs opgelost en het project overgezet naar de testomgeving. Op vrijdag vond er een meeting plaats met de klant waarin we extra feedback kregen. We moeten nu o.a. een sjabloon toevoegen om feestdagen sneller te configureren, en een nieuwe kolom voorzien om te tonen aan wie een e-mail moet worden gestuurd. Het is dus goed mogelijk dat we binnenkort opnieuw aan dit project werken om deze verbeteringen toe te voegen.",
    image:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1743448694/photo-1542626991-cbc4e32524cc_isopgz.avif",
    image2:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1743448267/WhatsApp_Image_2025-03-31_at_20.56.40_4397df96_aginzy.jpg",
    image3:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1743448261/WhatsApp_Image_2025-03-31_at_20.56.30_e0b5d777_ddsvjs.jpg",
    createdAt: "2025-03-31",
    authorName: "Shreejan Joshi",
    authorImage:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1738960869/IMG_3150_web_gmcitd.png",
  },
  {
    id: 9,
    title: "Country Template Functionaliteit Voltooid",
    short: "Landgebonden feestdagen als sjabloon voor organisaties",
    categories: ["Internship", "Feature Development", "Calendar", "Templates"],
    fullText:
      "Deze week hebben we gewerkt aan het afronden van het project door alle 'nice to have'-functionaliteiten te implementeren. De belangrijkste toevoeging was de nieuwe functionaliteit voor het beheren van country templates. Elk land heeft namelijk zijn eigen feestdagen, en sommige zijn uniek per land. Om dit proces te vergemakkelijken, kunnen super admins nu landen aanmaken in het country template gedeelte, en vervolgens feestdagen toevoegen in de country holidays pagina. Zo ontstaat er per land een sjabloon van feestdagen.",
    fullText2:
      "Organisaties kunnen deze sjablonen gebruiken om sneller hun eigen holiday calendar op te bouwen. Via de functie 'Use Template Calendar' kunnen gebruikers een land selecteren en de bijbehorende feestdagen toevoegen aan hun organisatiekalender, op voorwaarde dat ze toegang hebben tot die organisatie. Hierdoor wordt het proces efficiënter en minder foutgevoelig. Het afronden van deze functionaliteit was belangrijk voor de gebruiksvriendelijkheid van het systeem. Deze week stond dus in het teken van afronden, verfijnen en voorbereiden op oplevering.",
    image:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1743967784/photo-1703300450387-047da16a89c4_pf8jky.avif",
    image2:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1743967493/WhatsApp_Image_2025-04-06_at_19.49.59_6a16dc6a_ftcrqy.jpg",
    image3:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1743967519/WhatsApp_Image_2025-04-06_at_19.50.00_ad8dfd4a_nelv9t.jpg",
    createdAt: "2025-04-06",
    authorName: "Shreejan Joshi",
    authorImage:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1738960869/IMG_3150_web_gmcitd.png",
  },
];

export const getBlogs = (): Blog[] => {
  return blogs;
};

export const getBlogById = (id: number): Blog | undefined => {
  return blogs.find((blog) => blog.id === id);
};
