import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileorderComponent } from './mobileorder.component';

describe('MobileorderComponent', () => {
  let component: MobileorderComponent;
  let fixture: ComponentFixture<MobileorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
