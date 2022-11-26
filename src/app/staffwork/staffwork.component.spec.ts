import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffworkComponent } from './staffwork.component';

describe('StaffworkComponent', () => {
  let component: StaffworkComponent;
  let fixture: ComponentFixture<StaffworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
