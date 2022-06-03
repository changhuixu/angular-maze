import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css'],
})
export class MathComponent implements OnInit {
  nAdd = 10;
  nSub = 10;
  additions: string[] = [];
  subtractions: string[] = [];
  multiplications: string[] = [];
  divisions: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getAdditions();
    this.getSubtractions();
    this.getMultiplications();
    this.getDivisions();
  }

  getAdditions() {
    const max = 10000;
    const min = 10;
    for (let i = 0; i < this.nAdd; i++) {
      let a = this.randomIntBetween(min, max);
      let b = this.randomIntBetween(min, max);
      this.additions.push(`${a} + ${b}`);
    }
  }

  getSubtractions() {
    const max = 10000;
    const min = 10;
    for (let i = 0; i < this.nAdd; i++) {
      let a = this.randomIntBetween(min, max);
      let b = this.randomIntBetween(min, max);
      let s = a > b ? `${a} - ${b}` : `${b} - ${a}`;
      this.subtractions.push(s);
    }
  }

  getMultiplications() {
    const max = 100;
    const min = 1;
    for (let i = 0; i < this.nAdd; i++) {
      let a = this.randomIntBetween(min, max);
      let b = this.randomIntBetween(min, max);
      this.multiplications.push(`${a} &times; ${b}`);
    }
  }

  getDivisions() {
    const max = 100;
    const min = 1;
    for (let i = 0; i < this.nAdd; i++) {
      let a = this.randomIntBetween(min, max);
      let b = this.randomIntBetween(min, max);
      this.divisions.push(`${a * b} &div; ${b}`);
    }
  }

  private randomIntBetween(min: number, max: number): number {
    return ~~(Math.random() * (max - min + 1) + min);
  }
}
