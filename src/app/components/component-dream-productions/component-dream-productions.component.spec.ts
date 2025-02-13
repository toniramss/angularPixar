import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDreamProductionsComponent } from './component-dream-productions.component';

describe('ComponentDreamProductionsComponent', () => {
  let component: ComponentDreamProductionsComponent;
  let fixture: ComponentFixture<ComponentDreamProductionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentDreamProductionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDreamProductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
