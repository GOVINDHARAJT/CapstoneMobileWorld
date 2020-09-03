import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilebybrandComponent } from './mobilebybrand.component';

describe('MobilebybrandComponent', () => {
  let component: MobilebybrandComponent;
  let fixture: ComponentFixture<MobilebybrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilebybrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilebybrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
