import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentElioComponent } from './component-elio.component';

describe('ComponentElioComponent', () => {
  let component: ComponentElioComponent;
  let fixture: ComponentFixture<ComponentElioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentElioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentElioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
