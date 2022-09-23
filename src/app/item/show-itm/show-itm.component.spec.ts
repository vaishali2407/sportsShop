import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowItmComponent } from './show-itm.component';

describe('ShowItmComponent', () => {
  let component: ShowItmComponent;
  let fixture: ComponentFixture<ShowItmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowItmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowItmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
