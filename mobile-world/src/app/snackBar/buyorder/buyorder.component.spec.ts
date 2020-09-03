import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyorderComponent } from './buyorder.component';

describe('BuyorderComponent', () => {
  let component: BuyorderComponent;
  let fixture: ComponentFixture<BuyorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
