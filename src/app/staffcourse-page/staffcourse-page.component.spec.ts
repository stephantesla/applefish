import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffcoursePageComponent } from './staffcourse-page.component';

describe('StaffcoursePageComponent', () => {
  let component: StaffcoursePageComponent;
  let fixture: ComponentFixture<StaffcoursePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffcoursePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffcoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
