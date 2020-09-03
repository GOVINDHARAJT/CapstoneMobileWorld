import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilebyratingComponent } from './mobilebyrating.component';

describe('MobilebyratingComponent', () => {
  let component: MobilebyratingComponent;
  let fixture: ComponentFixture<MobilebyratingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilebyratingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilebyratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
