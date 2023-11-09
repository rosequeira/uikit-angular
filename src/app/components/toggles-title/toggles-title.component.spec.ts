import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglesTitleComponent } from './toggles-title.component';

describe('TogglesTitleComponent', () => {
  let component: TogglesTitleComponent;
  let fixture: ComponentFixture<TogglesTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TogglesTitleComponent]
    });
    fixture = TestBed.createComponent(TogglesTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
