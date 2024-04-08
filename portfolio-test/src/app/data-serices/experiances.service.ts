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

  getFrontendExperiance() {
    return this.frontendExperiance
  }
}
