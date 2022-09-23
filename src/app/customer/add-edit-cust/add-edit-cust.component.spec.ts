import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCustComponent } from './add-edit-cust.component';

describe('AddEditCustComponent', () => {
  let component: AddEditCustComponent;
  let fixture: ComponentFixture<AddEditCustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCustComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
