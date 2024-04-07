import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProjectsComponent } from '../../projects/projects.component';
import { SkillsComponent } from '../../skills/skills.component';
import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-links-list',
  standalone: true,
  imports: [MatSidenavModule, ProjectsComponent, SkillsComponent, RouterModule],
  templateUrl: './links-list.component.html',
  styleUrl: './links-list.component.scss'
})

export class LinksListComponent {

}

