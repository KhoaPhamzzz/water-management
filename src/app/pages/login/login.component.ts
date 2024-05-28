import { Component, AfterViewInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLock, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [FontAwesomeModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginComponent implements AfterViewInit {
  title: string = 'Welcome Back!';
  faEnvelope = faEnvelope;
  faLock = faLock;
  faUser = faUser;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  passwordVisible: boolean = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      const loginBtn = document.getElementById('loginBtn')!;
      const signupBtn = document.getElementById('signupBtn')!;
      const loginForm = document.getElementById('loginForm')!;
      const signupForm = document.getElementById('signupForm')!;
      const sliderTab = document.getElementById('sliderTab')!;

      signupBtn.onclick = () => {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        sliderTab.style.left = '50%';
        loginBtn.classList.remove('text-white');
        loginBtn.classList.add('text-black');
        signupBtn.classList.remove('text-black');
        signupBtn.classList.add('text-white');
        this.title = 'Sign up';
      };

      loginBtn.onclick = () => {
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
        sliderTab.style.left = '0%';
        signupBtn.classList.remove('text-white');
        signupBtn.classList.add('text-black');
        loginBtn.classList.remove('text-black');
        loginBtn.classList.add('text-white');
        this.title = 'Welcome Back!';
      };
    }
  }
}
