import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExperiancesService {

  frontendExperiance = {
    positions: 'Frontend Developer',
    period: 'from augest 2023 to december 2023',
    directings: [
      'On-line game (in a team)',
      'Website for UI/UX designer (in a team)',
    ],
    mainTask:
      'Transfer a board game online, create a website for a web designer. Our work was carried out in a team of three frontend developers under the guidance of a frontend architect. Tasks were assigned to the team or to each employee separately. Basic communication via GitHub.',
    mainDescr:
      'Our work was carried out in a team of three frontend developers under the guidance of a frontend architect. Tasks were assigned to the team or to each employee separately. Basic communication via GitHub',
    mainTaskGame: 'Transfer a board game to a web application.',
    mainTaskWebsite:
      'Create a website using the figma layout. Strict adherence to the layout',
    descrGame:
      'The game for two or three and more players. Has five decks and additional game cards. The program was written with using OOP. The game is saved and restored by ID in local storage.',
    descrWebsite:
      'Modern website for a UI/UX designer based on her own design layout (Figma)',
    responsibilitiesWebsite:
      'The user should be able to download/change texts and pictures. ',
    responsibilitiesGame:
      'Write down the logic of the game, create a design based on the materials provided, and save it to local storage.',
    skillsUsedGame: [
      'Typescript',
      'SASS',
      'React',
      'MobX',
      'Mobx-react-lite',
      'React-router-dom',
      'Jest'
      
    ],
    skillsUsedWebsite: [
      'Typescript',
      'SASS',
      'React',
      'MobX',
      'Mobx-react-lite',
      'React-router-dom',
      'Jest',
      'Figma'
    ],
  };

  previousExperienceData = [
    {
      positions: [
        "Head of Sales Department",
        "Call-center Supervisor",
      ],
      period: "from 2013 to 2022",
      directings: "Jewelry/Real Estate/Construction ",
      direction: "B2B, B2C",
      location: "UA: Kyiv",
      mainTasks:
        " The main task is the creation/restructuring and management of the sales direction (support and expansion of wholesale, retail, and TV throughout Ukraine, launching a network of retail stores, and B2C and B2B call centers).",
      responsibilities:
        "Review of current contracts, elimination of illiquid agreements, debtreduction, optimization of terms of cooperation, cost optimization, drawing up new commercial proposals, establishing new connections, returning former clients to cooperation, rising in the rankings, coordinating promotions and assortment, plan for opening new points/introducing new products, writing scripts, increasing KPI, increasing staff.",
      otherResponsibilities:
        "conducting training according to the direction, synchronizing the work of departments, searching for new sales channels, coordinating/changing marketing and pricing policies for individual segments, and writing the business procedure manuals for the department (algorithms for interaction within the company and the company - client).",
    },
    {
      positions: ["Sales Manager"],
      period: "from 2009 to 2013",
      directings: "Retail/Real Estate/Wholesale trade/VIP clients",
      direction: "B2B, B2C",
      location: "UA: Romny / Konotop / Kyiv",
      mainTasks:
        "Collection and research of information, search for future clients, fulfillment of product sales plan, concluding contracts and conducting transactions, preparation of reporting documents, post-sales customer service, including information about marketing campaigns",
      responsibilities:
        "maintaining and increasing the customer base, working with accounts receivable, and increasing sales in the assigned territory.",
      otherResponsibilities: "Control over product display and expiration dates.",
    },
  ];
  

  getFrontendExperiance() {
    return this.frontendExperiance
  }
  getPreviousExperienceData(){
    return this.previousExperienceData
  }
}
