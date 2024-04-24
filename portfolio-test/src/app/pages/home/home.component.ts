import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {
    gsap.to(".box", { 
      x: 200,
    });
  }

}