import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from '../projects/projects.component';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'app-content-panel',
  standalone: true,
  imports: [RouterModule, ProjectsComponent, ExperienceComponent, SkillsComponent, ContactsComponent],
  templateUrl: './content-panel.component.html',
  styleUrl: './content-panel.component.scss'
})
export class ContentPanelComponent {

}
