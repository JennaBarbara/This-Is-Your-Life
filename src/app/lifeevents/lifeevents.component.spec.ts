import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeeventsComponent } from './lifeevents.component';

describe('LifeeventsComponent', () => {
  let component: LifeeventsComponent;
  let fixture: ComponentFixture<LifeeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
