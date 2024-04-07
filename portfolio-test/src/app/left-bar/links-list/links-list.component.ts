import { Component, ElementRef } from '@angular/core';
import { ProjectsComponent } from '../../projects/projects.component';
import { SkillsComponent } from '../../skills/skills.component';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-links-list',
  standalone: true,
  imports: [ProjectsComponent, SkillsComponent, RouterModule],
  templateUrl: './links-list.component.html',
  styleUrl: './links-list.component.scss'
})

export class LinksListComponent {


}

