import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultEspecialComponent } from './consult-especial.component';

describe('ConsultEspecialComponent', () => {
  let component: ConsultEspecialComponent;
  let fixture: ComponentFixture<ConsultEspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultEspecialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
