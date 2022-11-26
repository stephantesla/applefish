import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Staffcourse1Component } from './staffcourse1.component';

describe('Staffcourse1Component', () => {
  let component: Staffcourse1Component;
  let fixture: ComponentFixture<Staffcourse1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Staffcourse1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Staffcourse1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
