import { DOCUMENT, inject, Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  private loaded$?: ReplaySubject<boolean>;
  private readonly source =
    'https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js';

  private readonly document: Document = inject(DOCUMENT);

  registerMathJax(): Observable<boolean> {
    if (this.loaded$) {
      return this.loaded$.asObservable();
    }

    this.loaded$ = new ReplaySubject();

    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.src = this.source;
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.onload = () => {
      this.loaded$!.next(true);
      this.loaded$!.complete();
    };

    this.document.head.appendChild(script);

    return this.loaded$.asObservable();
  }

  render(element: HTMLElement, math: string) {
    // Take initial typesetting which MathJax performs into account
    window.MathJax.startup.promise.then(() => {
      element.innerHTML = math;
      window.MathJax.typesetPromise();
    });
  }
}
declare global {
  interface Window {
    MathJax: {
      tex: {
        inlineMath: { '[+]': [['$', '$']] };
      };
      typesetPromise: () => void;
      startup: {
        promise: Promise<any>;
      };
    };
  }
}
