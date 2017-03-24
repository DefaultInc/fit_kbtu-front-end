import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FkNotFoundComponent } from './fk-not-found.component';

describe('FkNotFoundComponent', () => {
  let component: FkNotFoundComponent;
  let fixture: ComponentFixture<FkNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FkNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FkNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
