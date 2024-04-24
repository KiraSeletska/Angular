import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})

export class TextComponent implements OnInit/*, OnDestroy*/ {
  public reachedTheEnd: boolean | undefined;

  constructor(private decimalPipe: DecimalPipe) {}

  ngOnInit() {

    const cats = document.querySelectorAll<HTMLElement>(".cat");

    gsap.to('progress', {
      value: 100,
      scrollTrigger: {
        trigger: '.main',
        scrub: 0.3,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (options) => {
          if (options instanceof ScrollTrigger) {
            const value = Number(this.decimalPipe.transform(options.progress, '1.2-2'));
            this.reachedTheEnd = value > 0.93;
          }
        }
      },
    });

 cats.forEach((cat: HTMLElement) => {
    gsap.from(cat, {
      duration: 1,
      opacity: 0,
      y: 100,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cat,
        start: "top 100%", // Начинать анимацию, когда верх кота находится на 80% от верха вьюпорта
        end: "top 20%",
     /*
        onEnter: () => {
          gsap.to(cat, { duration: 1, opacity: 1, y: 0 });
        },
        onLeaveBack: () => {
          gsap.to(cat, { duration: 1, opacity: 0, y: 50 });
        },*/
       // markers: true,
        scrub: 1,
      }
    });
  });
  }

  onClick(elem: HTMLElement) {
    elem.scrollIntoView({ behavior: 'smooth' });
  }

}


/*
  gsap.from(".cat", {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".cat",
        start: "top bottom",
        onEnter: () => {
          gsap.to(".cat", { duration: 1, opacity: 1, y: 0 });
        },
        onLeaveBack: () => {
          gsap.to(".cat", { duration: 1, opacity: 0, y: 50 });
        },
        toggleActions: "play reverse",
        markers: true,
        scrub: 1,
      }
    });
*/