import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoodleSubmitComponent } from './doodle-submit.component';

describe('DoodleSubmitComponent', () => {
  let component: DoodleSubmitComponent;
  let fixture: ComponentFixture<DoodleSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoodleSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoodleSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
