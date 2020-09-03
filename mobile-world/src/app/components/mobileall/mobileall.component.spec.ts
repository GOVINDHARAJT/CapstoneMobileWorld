import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileallComponent } from './mobileall.component';

describe('MobileallComponent', () => {
  let component: MobileallComponent;
  let fixture: ComponentFixture<MobileallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
