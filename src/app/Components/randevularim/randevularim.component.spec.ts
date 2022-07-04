import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandevularimComponent } from './randevularim.component';

describe('RandevularimComponent', () => {
  let component: RandevularimComponent;
  let fixture: ComponentFixture<RandevularimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandevularimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandevularimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
