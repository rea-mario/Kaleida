import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProgressMaskComponent } from './app-progress-mask.component';

describe('AppProgressMaskComponent', () => {
  let component: AppProgressMaskComponent;
  let fixture: ComponentFixture<AppProgressMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppProgressMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProgressMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
