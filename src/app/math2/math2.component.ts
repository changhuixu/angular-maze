import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math2',
  templateUrl: './math2.component.html',
  styleUrls: ['./math2.component.css'],
})
export class Math2Component implements OnInit {
  mathml = `<math xmlns="http://www.w3.org/1998/Math/MathML">
<mfrac>
  <mn>numerator1</mn>
  <mn>denominator1</mn>
</mfrac>
<mo>operator</mo>
<mfrac>
  <mn>numerator2</mn>
  <mn>denominator2</mn>
</mfrac>
<mo>=</mo>
<mn>?</mn>
</math>
  `;
  nAdd = 10;
  nSub = 10;
  additions: string[] = [];
  constructor() {}

  ngOnInit(): void {
    this.getAdditions();
  }

  getAdditions() {
    const max = 25;
    const min = 1;
    for (let i = 0; i < this.nAdd; i++) {
      let a = this.randomIntBetween(min, max);
      let b = this.randomIntBetween(min, max);
      let c = this.randomIntBetween(min, max);
      let d = this.randomIntBetween(min, max);
      this.additions.push(
        this.mathml
          .replace('operator', '+')
          .replace('numerator1', a.toString())
          .replace('denominator1', b.toString())
          .replace('numerator2', c.toString())
          .replace('denominator2', d.toString())
      );
    }
  }

  private randomIntBetween(min: number, max: number): number {
    return ~~(Math.random() * (max - min + 1) + min);
  }
}
