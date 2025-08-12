import { Component, inject } from '@angular/core';
import { AuthService } from '../auth/auth-service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  public authService = inject(AuthService);
  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }
}
