import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component3LeftComponent } from './component3-left.component';

describe('Component3LeftComponent', () => {
  let component: Component3LeftComponent;
  let fixture: ComponentFixture<Component3LeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component3LeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component3LeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
