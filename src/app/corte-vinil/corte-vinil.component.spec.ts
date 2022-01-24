import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorteVinilComponent } from './corte-vinil.component';

describe('CorteVinilComponent', () => {
  let component: CorteVinilComponent;
  let fixture: ComponentFixture<CorteVinilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorteVinilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorteVinilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
