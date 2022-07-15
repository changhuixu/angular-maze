import { NgModule } from '@angular/core';
import { MathDirective } from './math.directive';
import { MathService } from './math.service';

@NgModule({
  declarations: [MathDirective],
  exports: [MathDirective],
  providers: [MathService],
})
export class MathModule {}
