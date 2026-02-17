import { TestBed } from '@angular/core/testing';
import {SquareComponent } from "./square.component"

describe('SquareComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquareComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SquareComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(SquareComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-tictactoe');
  });
});
