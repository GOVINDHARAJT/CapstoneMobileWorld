import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilebybetweenpriceComponent } from './mobilebybetweenprice.component';

describe('MobilebybetweenpriceComponent', () => {
  let component: MobilebybetweenpriceComponent;
  let fixture: ComponentFixture<MobilebybetweenpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilebybetweenpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilebybetweenpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
