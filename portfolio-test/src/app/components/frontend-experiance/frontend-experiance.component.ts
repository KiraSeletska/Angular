import { Component, OnInit } from '@angular/core';
import { ExperiancesService } from '../../data-serices/experiances.service';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../data-serices/projects.service';

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
  selector: 'app-frontend-experiance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-experiance.component.html',
  styleUrl: './frontend-experiance.component.scss',
})
export class FrontendExperianceComponent implements OnInit {
  frontendExperiance!: FrontendExperience;
  icons!: SkillsIcons;

  constructor(
    private itExperiance: ExperiancesService,
    private projectService: ProjectService
  ) {}
  ngOnInit(): void {
    this.frontendExperiance = this.itExperiance.getFrontendExperiance();
    this.icons = this.projectService.getSkillsIcons();
  }
}
