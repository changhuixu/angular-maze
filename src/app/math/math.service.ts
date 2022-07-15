import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';

declare global {
  interface Window {
    MathJax: {
      typesetPromise: () => void;
      startup: {
        promise: Promise<any>;
      };
    };
  }
}

@Injectable({
  providedIn: 'root',
})
export class MathService {
  private loaded$: ReplaySubject<boolean>;
  private readonly source =
    'https://cdn.jsdelivr.net/npm/mathjax@3.0.5/es5/mml-chtml.js';
  private readonly integrity =
    'sha256-CnzfCXjFj1REmPHgWvm/OQv8gFaxwbLKUi41yCU7N2s=';

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  registerMathJax(): Observable<boolean> {
    if (this.loaded$) {
      return this.loaded$.asObservable();
    }

    this.loaded$ = new ReplaySubject();

    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.src = this.source;
    script.integrity = this.integrity;
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.onload = () => {
      this.loaded$.next(true);
      this.loaded$.complete();
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
