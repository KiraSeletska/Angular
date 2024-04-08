import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from '../../pages/projects/projects.component'; 
import { ExperienceComponent } from '../../pages/experience/experience.component'; 
import { SkillsComponent } from '../../pages/skills/skills.component'; 
import { ContactsComponent } from '../../pages/contacts/contacts.component'; 

@Component({
  selector: 'app-content-panel',
  standalone: true,
  imports: [RouterModule, ProjectsComponent, ExperienceComponent, SkillsComponent, ContactsComponent],
  templateUrl: './content-panel.component.html',
  styleUrl: './content-panel.component.scss'
})
export class ContentPanelComponent {

}
