import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../data-serices/home.service';


@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss'
})
export class PersonalInfoComponent implements OnInit {
  personalPhoto!: string;
  personalHello!: string;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.personalPhoto = this.homeService.getPersonalPhoto();
    this.personalHello = this.homeService.getPersonalHello();
  }
  
}
