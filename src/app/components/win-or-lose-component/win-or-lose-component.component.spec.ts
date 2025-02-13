import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinOrLoseComponentComponent } from './win-or-lose-component.component';

describe('WinOrLoseComponentComponent', () => {
  let component: WinOrLoseComponentComponent;
  let fixture: ComponentFixture<WinOrLoseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinOrLoseComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinOrLoseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
