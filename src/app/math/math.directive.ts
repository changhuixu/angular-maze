import {
  Directive,
  OnChanges,
  OnInit,
  Input,
  ElementRef,
  SimpleChanges,
  NgZone,
} from '@angular/core';
import { MathService } from './math.service';

@Directive({
  selector: '[appMath]',
})
export class MathDirective implements OnInit, OnChanges {
  @Input() appMath = '';
  private readonly el: HTMLElement;

  constructor(
    private svc: MathService,
    elementRef: ElementRef,
    private ngZone: NgZone
  ) {
    this.el = elementRef.nativeElement;
  }

  ngOnInit() {
    this.render();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes['appMath'] && changes['appMath'].currentValue) {
      this.render();
    }
  }

  private render() {
    this.ngZone.runOutsideAngular(() => {
      this.svc
        .registerMathJax()
        .subscribe(() => this.svc.render(this.el, this.appMath));
    });
  }
}
