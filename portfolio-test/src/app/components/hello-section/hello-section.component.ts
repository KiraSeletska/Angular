import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../data-serices/home.service'; 


@Component({
  selector: 'app-hello-section',
  standalone: true,
  imports: [],
  templateUrl: './hello-section.component.html',
  styleUrl: './hello-section.component.scss'
})
export class HelloComponent implements OnInit {
  personalPhoto!: string;
  personalHello!: string;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.personalPhoto = this.homeService.getPersonalPhoto();
    this.personalHello = this.homeService.getPersonalHello();
  }
  
}
