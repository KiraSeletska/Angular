import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentPanelComponent } from './components/content-panel/content-panel.component'; 
import { HelloComponent } from './components/hello-section/hello-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, ContentPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-test';
}
