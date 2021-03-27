import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoodleControllerComponent } from './doodle-controller.component';

describe('DoodleControllerComponent', () => {
  let component: DoodleControllerComponent;
  let fixture: ComponentFixture<DoodleControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoodleControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoodleControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
