import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SquareComponent } from './square/square.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SquareComponent],
  template: '<app-square></app-square>',

})
export class App {
  protected readonly title = signal('angular-tictactoe');
}
