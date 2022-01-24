import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerigrafiaComponent } from './serigrafia.component';

describe('SerigrafiaComponent', () => {
  let component: SerigrafiaComponent;
  let fixture: ComponentFixture<SerigrafiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerigrafiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerigrafiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
