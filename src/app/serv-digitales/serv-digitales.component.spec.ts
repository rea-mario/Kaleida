import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServDigitalesComponent } from './serv-digitales.component';

describe('ServDigitalesComponent', () => {
  let component: ServDigitalesComponent;
  let fixture: ComponentFixture<ServDigitalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServDigitalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServDigitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
