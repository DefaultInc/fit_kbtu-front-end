import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FkUserProfileComponent } from './fk-user-profile.component';

describe('FkUserProfileComponent', () => {
  let component: FkUserProfileComponent;
  let fixture: ComponentFixture<FkUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FkUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FkUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
