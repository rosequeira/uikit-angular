import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconmoonComponent } from './iconmoon.component';

describe('IconmoonComponent', () => {
  let component: IconmoonComponent;
  let fixture: ComponentFixture<IconmoonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconmoonComponent]
    });
    fixture = TestBed.createComponent(IconmoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
