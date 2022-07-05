import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandevudetailsComponent } from './randevudetails.component';

describe('RandevudetailsComponent', () => {
  let component: RandevudetailsComponent;
  let fixture: ComponentFixture<RandevudetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandevudetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandevudetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
