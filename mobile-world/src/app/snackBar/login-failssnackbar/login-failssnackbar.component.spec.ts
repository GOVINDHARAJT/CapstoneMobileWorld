import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFailssnackbarComponent } from './login-failssnackbar.component';

describe('LoginFailssnackbarComponent', () => {
  let component: LoginFailssnackbarComponent;
  let fixture: ComponentFixture<LoginFailssnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFailssnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFailssnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
