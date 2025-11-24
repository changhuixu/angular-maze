import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div style="text-align: center; margin-bottom: 0.25rem">
      <a href="https://github.com/changhuixu/angular-maze" title="git repo">
        GitHub Repo
      </a>
    </div>
    <nav style="text-align: center">
      @for(r of links; track r.path) {
      <a [routerLink]="r.path" routerLinkActive="active">{{ r.text }}</a>
      }
    </nav>
    <div style="margin: 0 auto">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: '',
})
export class App {
  links = routes
    .filter((route) => route.data && route.data['text'])
    .map(
      (route) =>
        <{ path: string; text: string }>{
          path: route.path,
          text: route.data!['text'],
        }
    );
}
