import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";

@Component({
  selector: 'app-squares',  
  standalone: true,
  imports: [CommonModule],
  templateUrl: './squares.component.html',
  styleUrls: ['./squares.component.scss']
})
export class SquaresComponent implements OnInit {
  rows: number[] = [];
  cols: number[] = [];

  constructor() { }

  ngOnInit(): void {
    // Генерируем массивы для строк и столбцов
    this.rows = Array.from({ length: 10 }, (_, i) => i);
    this.cols = Array.from({ length: 10 }, (_, i) => i);

    setTimeout(() => {
      // Анимация с использованием GSAP
      gsap.to(".cell", {
        duration: 1,
        scale: 0.1,
        y: 40,
        delay: 1, 
        stagger: {
          grid: [7,15],
          from: "random",
          amount: 1.5,
        },
        ease: "sine.out", 
        force3D: true,
        repeat: -1,
        yoyo: true // Добавляем параметр yoyo для циклического повтора анимации
      });
    });
    
  }
}