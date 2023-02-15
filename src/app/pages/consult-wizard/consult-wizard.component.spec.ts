import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultWizardComponent } from './consult-wizard.component';

describe('ConsultWizardComponent', () => {
  let component: ConsultWizardComponent;
  let fixture: ComponentFixture<ConsultWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultWizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
