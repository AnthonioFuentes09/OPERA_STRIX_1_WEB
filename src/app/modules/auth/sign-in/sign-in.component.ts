import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent  {

  private _authService = inject(AuthService);

  constructor() {
    console.log('AuthService roles:', this._authService.authRolesInText);
   
    this._authService.signIn('juan.perez@email.com', 'role1', 'password123').subscribe({
      next: (response) => {
        console.log('Sign-in successful:', response);
      },
      error: (error) => {
        console.error('Sign-in error:', error);
      }
    });
  }
}
