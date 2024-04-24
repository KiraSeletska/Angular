import { Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-boxes',
  standalone: true,
  imports: [],
  templateUrl: './boxes.component.html',
  styleUrl: './boxes.component.scss'
})
export class BoxesComponent {
  ngOnInit(): void {

    gsap.to(".green", { 
      x: 400,
    });

    gsap.fromTo(".red", { 
      x: -200,
    }, { 
      x: 200,
    });
  

  gsap.to(".rotate", { 
    duration: 2,
    x: 200,
    rotation: 360,
  });

  gsap.to(".yellow", { 
    duration: 2,
    x: 300,
    backgroundColor: '#8d3dae',
  });

  gsap.to(".pink", { 
    rotation: 360,
    x: '100vw',
    xPercent: -150,
    backgroundColor: 'transparent',
    // special properties
    duration: 5, // how long the animation lasts
    repeat: -1, // the number of repeats - this will play 3 times
    yoyo: true, // this will alternate back and forth on each repeat. Like a yoyo
  });

  gsap.to(".grey", { 
    rotation: 360,
    duration: 1,
    repeat: 1,
    repeatDelay: 1,
   
  });
  
  
  gsap.to(".purple", { 
    rotation: 360,
    duration: 1,
    delay: 1 // delay the start of this animation
  });
}
}
