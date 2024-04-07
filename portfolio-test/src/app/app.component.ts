import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { ContentPanelComponent } from './content-panel/content-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LeftBarComponent, ContentPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-test';
}
