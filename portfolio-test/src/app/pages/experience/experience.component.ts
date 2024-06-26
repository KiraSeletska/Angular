import { Component, OnInit } from '@angular/core';
import { ExperiancesService } from '../../data-serices/experiances.service';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../data-serices/projects.service';
import { FrontendExperianceComponent } from '../../components/frontend-experiance/frontend-experiance.component';
import { PreviousExperianceComponent } from '../../components/previous-experiance/previous-experiance.component';

interface FrontendExperience {
  positions: string;
  period: string;
  directings: string[];
  mainTask: string;
  mainDescr: string;
  mainTaskGame: string;
  mainTaskWebsite: string;
  descrGame: string;
  descrWebsite: string;
  responsibilitiesWebsite: string;
  responsibilitiesGame: string;
  skillsUsedGame: string[];
  skillsUsedWebsite: string[];

}
export interface SkillsIcons {
  [key: string]: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, FrontendExperianceComponent, PreviousExperianceComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {

}
