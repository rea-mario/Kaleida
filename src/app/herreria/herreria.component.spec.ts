import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerreriaComponent } from './herreria.component';

describe('HerreriaComponent', () => {
  let component: HerreriaComponent;
  let fixture: ComponentFixture<HerreriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerreriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerreriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
