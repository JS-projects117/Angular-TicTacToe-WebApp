import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <h1>Random Number</h1>
    <p>{{ randNum() }}</p>
  `,
})
export class SquareComponent {
  randNum = signal(0);

  constructor() {
    setInterval(() => this.randNum.set(Math.random()), 100);
  }
}
