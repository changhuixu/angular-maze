import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math3',
  templateUrl: './math3.component.html',
  styleUrls: ['./math3.component.css', '../math1/math1.component.css'],
  standalone: false,
})
export class Math3Component implements OnInit {
  nAdd = 10;
  nSub = 10;
  list1: string[] = [];
  list2: string[] = [];
  operators = ['+', '-', '&times;', '&div;'];

  constructor() {}

  ngOnInit(): void {
    this.getLists();
  }

  getLists() {
    const max = 200;
    const min = 1;
    for (let i = 0; i < this.nAdd; i++) {
      const a = this.randomIntBetween(min, max);
      const op1 = this.randomOperator();
      const b = this.randomIntBetween(min, max);
      const op2 = this.randomOperator();
      const f = this.randomIntBetween(1, 10);
      const c = this.randomIntBetween(min, max);
      const op3 = this.randomOperator();
      const d = this.randomIntBetween(min, max);
      this.list1.push(`(${a} ${op1} ${b}) ${op2} (${c} ${op3} ${d})`);
      this.list2.push(
        `(${d} ${op1} ${b}) ${op2} ${f} &times; (${a} ${op3} ${c})`
      );
    }
  }

  private randomIntBetween(min: number, max: number): number {
    return ~~(Math.random() * (max - min + 1) + min);
  }
  private randomOperator(): string {
    return this.operators[~~(Math.random() * 4)];
  }
}
