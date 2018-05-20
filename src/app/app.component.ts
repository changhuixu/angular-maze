import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Maze } from './maze/models/maze';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'maze';
  row = 20;
  col = 30;
  length = 20;
  private maze: Maze;
  private canvas: HTMLCanvasElement;

  ngOnInit() {}

  ngAfterViewInit() {
    this.canvas = <HTMLCanvasElement>document.getElementById('maze');
    this.drawMaze();
  }

  drawMaze() {
    this.maze = new Maze(this.row, this.col);
    this.canvas.width = this.col * this.length;
    this.canvas.height = this.row * this.length;
    this.maze.draw(this.canvas, this.length);
  }

  drawPath() {
    this.maze.drawPath(this.canvas, this.length);
  }
}
