import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MazeComponent } from './maze/maze.component';
import { CandyComponent } from './candy/candy.component';
import { CanvasComponent } from './candy/canvas/canvas.component';
import { Math1Component } from './math1/math1.component';
import { EightPuzzleComponent } from './eight-puzzle/eight-puzzle.component';
import { EightPuzzleTileComponent } from './eight-puzzle/eight-puzzle-tile/eight-puzzle-tile.component';
import { Math2Component } from './math2/math2.component';
import { MathModule } from './math/math.module';
import { Math3Component } from './math3/math3.component';

@NgModule({
  declarations: [
    AppComponent,
    MazeComponent,
    CandyComponent,
    CanvasComponent,
    Math1Component,
    EightPuzzleComponent,
    EightPuzzleTileComponent,
    Math2Component,
    Math3Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MathModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'maze', pathMatch: 'full' },
      { path: 'maze', component: MazeComponent },
      { path: 'candy', component: CandyComponent },
      { path: 'math1', component: Math1Component },
      { path: 'math2', component: Math2Component },
      { path: 'math3', component: Math3Component },
      { path: '8-puzzle', component: EightPuzzleComponent },
      { path: '**', redirectTo: '' },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
