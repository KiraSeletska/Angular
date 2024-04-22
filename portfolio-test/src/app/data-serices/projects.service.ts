import { Injectable } from '@angular/core';
import { SkillsIcons } from '../pages/experience/experience.component';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  skillsIcons: SkillsIcons = {
    Typescript: '../../../assets/icons/icons_scills/typescript.svg',
    Javascript: '../../../assets/icons/icons_scills/javascript.svg',
    SASS: '../../../assets/icons/icons_scills/sass.svg',
    React: '../../../assets/icons/icons_scills/react.svg',
    Angular: '../../../assets/icons/icons_scills/angular.svg',
    MobX: '../../../assets/icons/icons_scills/mobx.svg',
    Redux: '../../../assets/icons/icons_scills/redux.svg',
    Figma: '../../../assets/icons/icons_scills/figma.svg',
  };

  getSkillsIcons() {
    return this.skillsIcons;
  }

  linksToMainImages = [
    'assets/images/projects/game/2.png',
    'assets/images/projects/ll/LL.png',
    'assets/images/projects/portfolio/1.png',
    'assets/images/projects/store/1.png',
    'assets/images/projects/todo/todo2.png',
  ];
  getLinks() {
    return this.linksToMainImages;
  }
  descrMainImages = [
    { link: 'assets/images/projects/game/2.png', descr: 'Online game "Space Expatriate" for 2 or more players', skills: ['Typescript', 'React', 'MobX', 'SASS'] },
    { link: 'assets/images/projects/ll/LL.png', descr: 'Online application for learning languages', skills: ['Javascript', 'SASS', 'React'] },
    { link: 'assets/images/projects/portfolio/1.png', descr: 'UI/UX Designer Portfolio', skills: ['Typescript', 'SASS', 'React', 'Figma'] },
    { link: 'assets/images/projects/store/1.png', descr: 'Onlineshop Garten', skills: ['Javascript', 'SASS', 'React'] },
    { link:  'assets/images/projects/todo/todo2.png', descr: 'Todo list', skills: ['Typescript', 'SASS'] },
  ];
  getDescrMainImages(){
    return this.descrMainImages
  }
}
