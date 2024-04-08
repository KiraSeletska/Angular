import { Component, OnInit } from '@angular/core';
import { ExperiancesService } from '../../data-serices/experiances.service';
import { CommonModule } from '@angular/common';
interface PreviousExperience {
  positions: string[];
  period: string;
  directings: string;
  direction: string;
  location: string;
  mainTasks: string;
  responsibilities: string;
  otherResponsibilities: string;
}
@Component({
  selector: 'app-previous-experiance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './previous-experiance.component.html',
  styleUrl: './previous-experiance.component.scss'
})
export class PreviousExperianceComponent implements OnInit {
  prevExperiance!: PreviousExperience[];

  constructor(
    private previousExperiances: ExperiancesService
  ){}
  ngOnInit():void {
    this.prevExperiance = this.previousExperiances.getPreviousExperienceData()
  }

}
