import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentToyStoryComponent } from './component-toy-story.component';

describe('ComponentToyStoryComponent', () => {
  let component: ComponentToyStoryComponent;
  let fixture: ComponentFixture<ComponentToyStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentToyStoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentToyStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
