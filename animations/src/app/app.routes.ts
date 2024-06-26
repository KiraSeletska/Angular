import { Routes } from '@angular/router';
import { BoxesComponent } from './boxes/boxes.component';
import { SquaresComponent } from './squares/squares.component';
import { TextComponent } from './text/text.component';
import { CubeComponent } from './cube/cube.component';

export const routes: Routes = [
    { path: 'boxes', component: BoxesComponent },
{ path: 'squares', component: SquaresComponent },
{ path: 'text', component: TextComponent },
{ path: 'cube', component: CubeComponent },


];
