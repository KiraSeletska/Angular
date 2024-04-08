import { Component } from '@angular/core';
import { LinksListComponent } from './links-list/links-list.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

@Component({
  selector: 'app-left-bar',
  standalone: true,
  imports: [PersonalInfoComponent, LinksListComponent],
  templateUrl: './left-bar.component.html',
  styleUrl: './left-bar.component.scss'
})
export class LeftBarComponent {

}
