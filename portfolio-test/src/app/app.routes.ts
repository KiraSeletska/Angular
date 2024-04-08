import { Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component'; 
import { SkillsComponent } from './pages/skills/skills.component'; 
import { ContactsComponent } from './pages/contacts/contacts.component'; 
import { ExperienceComponent } from './pages/experience/experience.component'; 

export const routes: Routes = [ 
    
{ path: 'projects', component: ProjectsComponent },
{ path: 'skills', component: SkillsComponent },
{ path: 'experience', component: ExperienceComponent},
{ path: 'contacts', component: ContactsComponent}

];
