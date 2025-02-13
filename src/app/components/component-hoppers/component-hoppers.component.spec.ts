import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHoppersComponent } from './component-hoppers.component';

describe('ComponentHoppersComponent', () => {
  let component: ComponentHoppersComponent;
  let fixture: ComponentFixture<ComponentHoppersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentHoppersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentHoppersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
