import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServLaminadoComponent } from './serv-laminado.component';

describe('ServLaminadoComponent', () => {
  let component: ServLaminadoComponent;
  let fixture: ComponentFixture<ServLaminadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServLaminadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServLaminadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
