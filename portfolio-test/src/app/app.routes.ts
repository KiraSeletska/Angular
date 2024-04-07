import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ExperienceComponent } from './experience/experience.component';

export const routes: Routes = [ 
    
{ path: 'projects', component: ProjectsComponent },
{ path: 'skills', component: SkillsComponent },
{ path: 'experience', component: ExperienceComponent},
{ path: 'contacts', component: ContactsComponent}

];
