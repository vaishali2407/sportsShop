import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditItmComponent } from './add-edit-itm.component';

describe('AddEditItmComponent', () => {
  let component: AddEditItmComponent;
  let fixture: ComponentFixture<AddEditItmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditItmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditItmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
