import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../../data-serices/projects.service';

interface MainImages{
  link: string;
  descr: string;
  skills: []
}
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit  {
  imagesLinks: any;
mainImages!: any;

  constructor(
    private imgLinks: ProjectService,
    private imagesInfo: ProjectService
  ) {}
  ngOnInit(): void {
    this.imagesLinks = this.imgLinks.getLinks();
    this.mainImages = this.imagesInfo.getDescrMainImages();
  }

}