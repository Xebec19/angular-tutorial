import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  // templateUrl: './app.html',
  // styleUrl: './app.scss'
  template: `Hello Universe`,
  styles: `
    :host {
      color: #a144eb;
    }
  `
})
export class App {
  protected readonly title = signal('angular-tutorial');
}
