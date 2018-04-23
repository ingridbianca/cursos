import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateDriverComponent } from './form-template-driver.component';

describe('FormTemplateDriverComponent', () => {
  let component: FormTemplateDriverComponent;
  let fixture: ComponentFixture<FormTemplateDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTemplateDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTemplateDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
