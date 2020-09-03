import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsnackbarComponent } from './loginsnackbar.component';

describe('LoginsnackbarComponent', () => {
  let component: LoginsnackbarComponent;
  let fixture: ComponentFixture<LoginsnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginsnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
