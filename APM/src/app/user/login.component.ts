import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Store, select } from '@ngrx/store';
import * as fromUser from './state/user.reducer';
import { getMaskUserName } from './state/user.selectors';
import { ToggleMaskUsername } from './state/user.actions';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  pageTitle = 'Log In';

  maskUserName$ = this.store.pipe(select(getMaskUserName));

  constructor(private authService: AuthService, private router: Router, private store: Store<fromUser.UserState>) { }

  cancel(): void {
    this.router.navigate(['welcome']);
  }

  checkChanged(): void {
    this.store.dispatch(new ToggleMaskUsername());
  }

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);

      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['/products']);
      }
    }
  }
}
