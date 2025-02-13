import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component3RightComponent } from './component3-right.component';

describe('Component3RightComponent', () => {
  let component: Component3RightComponent;
  let fixture: ComponentFixture<Component3RightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component3RightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component3RightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
