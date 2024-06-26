import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';
import { BoxesComponent } from './boxes/boxes.component';
import { HeaderComponent } from './header/header.component';
import { CubeComponent } from './cube/cube.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoxesComponent, HeaderComponent, CubeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
