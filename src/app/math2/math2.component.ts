import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math2',
  templateUrl: './math2.component.html',
  styleUrls: ['./math2.component.css', '../math1/math1.component.css'],
})
export class Math2Component implements OnInit {
  frac = `<math xmlns="http://www.w3.org/1998/Math/MathML">
<mfrac>
  <mn>numerator1</mn>
  <mn>denominator1</mn>
</mfrac>
<mo>=</mo>
<mn>?</mn>
</math>
  `;
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
  fracSimp = '<math xmlns="http://www.w3.org/1998/Math/MathML">';
  additions1 = '<math xmlns="http://www.w3.org/1998/Math/MathML">';
  additions2 = '<math xmlns="http://www.w3.org/1998/Math/MathML">';
  multiplications = '<math xmlns="http://www.w3.org/1998/Math/MathML">';
  constructor() {}

  ngOnInit(): void {
    this.getSimplifications();
    this.getAdditions1();
    this.getAdditions2();
  }
  getSimplifications() {
    const max = 20;
    const min = 1;
    for (let i = 0; i < this.nAdd; i++) {
      let a = this.randomIntBetween(min, max);
      let b = this.randomIntBetween(min, max);
      let c = this.randomIntBetween(min, max);

      this.fracSimp = this.fracSimp.concat(`<mrow class="equation">
<mfrac>
  <mn>${a * c}</mn>
  <mn>${b * c}</mn>
</mfrac>
<mo>=</mo>
<mn>?</mn>
</mrow>`);
    }
    this.fracSimp = this.fracSimp.concat('</math>');
  }
  getAdditions1() {
    const max = 10;
    const min = 1;
    for (let i = 0; i < this.nAdd; i++) {
      let a = this.randomIntBetween(min, max);
      let b = this.randomIntBetween(min, max);
      let c = this.randomIntBetween(min, max);
      let d = this.randomIntBetween(min, max);
      this.additions1 = this.additions1.concat(`<mrow class="equation">
<mfrac>
  <mn>${a}</mn>
  <mn>${b}</mn>
</mfrac>
<mo>+</mo>
<mfrac>
  <mn>${c}</mn>
  <mn>${d}</mn>
</mfrac>
<mo>=</mo>
<mn>?</mn>
</mrow>`);
      this.multiplications = this.multiplications
        .concat(`<mrow class="equation">
<mfrac>
  <mn>${a}</mn>
  <mn>${b}</mn>
</mfrac>
<mo>&times;</mo>
<mfrac>
  <mn>${c}</mn>
  <mn>${d}</mn>
</mfrac>
<mo>=</mo>
<mn>?</mn>
</mrow>`);
    }
    this.additions1 = this.additions1.concat('</math>');
    this.multiplications = this.multiplications.concat('</math>');
  }
  getAdditions2() {
    const max = 25;
    const min = 1;
    for (let i = 0; i < this.nAdd; i++) {
      let a = this.randomIntBetween(min, max);
      let b = this.randomIntBetween(min, max);
      let c = this.randomIntBetween(min, max);
      let d = this.randomIntBetween(min, max);
      this.additions2 = this.additions2.concat(`<mrow class="equation">
<mfrac>
  <mn>${a}</mn>
  <mn>${b}</mn>
</mfrac>
<mo>+</mo>
<mfrac>
  <mn>${c}</mn>
  <mn>${d}</mn>
</mfrac>
<mo>=</mo>
<mn>?</mn>
</mrow>`);
    }
    this.additions2 = this.additions2.concat('</math>');
  }

  private randomIntBetween(min: number, max: number): number {
    return ~~(Math.random() * (max - min + 1) + min);
  }
}
