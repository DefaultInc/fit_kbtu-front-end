import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FkPostCardComponent } from './fk-post-card.component';

describe('FkPostCardComponent', () => {
  let component: FkPostCardComponent;
  let fixture: ComponentFixture<FkPostCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FkPostCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FkPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
