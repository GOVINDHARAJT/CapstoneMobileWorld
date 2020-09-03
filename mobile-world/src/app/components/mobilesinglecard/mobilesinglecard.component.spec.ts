import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilesinglecardComponent } from './mobilesinglecard.component';

describe('MobilesinglecardComponent', () => {
  let component: MobilesinglecardComponent;
  let fixture: ComponentFixture<MobilesinglecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilesinglecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilesinglecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
