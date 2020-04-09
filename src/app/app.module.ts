import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MazeComponent } from './maze/maze.component';
import { CandyComponent } from './candy/candy.component';
import { CanvasComponent } from './candy/canvas/canvas.component';
import { ScrambleSquaresComponent } from './squares/scramble-squares/scramble-squares.component';
import { SquaresComponent } from './squares/squares.component';
import { ImageTilesComponent } from './squares/image-tiles/image-tiles.component';

@NgModule({
  declarations: [
    AppComponent,
    MazeComponent,
    CandyComponent,
    CanvasComponent,
    ScrambleSquaresComponent,
    SquaresComponent,
    ImageTilesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'maze', pathMatch: 'full' },
      { path: 'maze', component: MazeComponent },
      { path: 'candy', component: CandyComponent },
      { path: 'square', component: SquaresComponent },
      { path: '**', redirectTo: '' }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
