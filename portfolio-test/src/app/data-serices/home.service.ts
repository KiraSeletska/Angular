
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  personalHello: string =
    'If work doesn`t bring you joy, then you`ll remain unhappy and poor. I`m a happy person whose current tech stack includes JavaScript, TypeScript, React and Angular. Soon I`ll be learning a new framework or language; it depends on my future employer';

  personalPhoto: string = 'assets/images/userPhoto/0.jpg';

  getPersonalHello(): string {
    return this.personalHello;
  }

  getPersonalPhoto(): string {
    return this.personalPhoto;
  }
}
