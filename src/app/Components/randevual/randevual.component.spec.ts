import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandevualComponent } from './randevual.component';

describe('RandevualComponent', () => {
  let component: RandevualComponent;
  let fixture: ComponentFixture<RandevualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandevualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandevualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
