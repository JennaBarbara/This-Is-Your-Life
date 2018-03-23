import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaldecisionsComponent } from './personaldecisions.component';

describe('PersonaldecisionsComponent', () => {
  let component: PersonaldecisionsComponent;
  let fixture: ComponentFixture<PersonaldecisionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaldecisionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaldecisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
