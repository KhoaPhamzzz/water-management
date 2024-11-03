import { Component, AfterViewInit, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLock, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FontAwesomeModule],
})
export class LoginComponent implements AfterViewInit, OnInit {
  title: string = 'Welcome Back!';
  faEnvelope = faEnvelope;
  faLock = faLock;
  faUser = faUser;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faGithub = faGithub;
  faYoutube = faYoutube;
  passwordVisible: boolean = false;
  errorMessage: string = '';
  rememberMe: boolean = false;
  isBrowser: boolean;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    // Check if the code is running in the browser
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.loadCredentials();
    }
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      const loginBtn = document.getElementById('loginBtn') as HTMLButtonElement;
      const signupBtn = document.getElementById('signupBtn') as HTMLButtonElement;
      const loginForm = document.getElementById('loginForm') as HTMLFormElement;
      const signupForm = document.getElementById('signupForm') as HTMLFormElement;
      const sliderTab = document.getElementById('sliderTab') as HTMLDivElement;
      const submitBtn = document.getElementById('loginSubmit') as HTMLButtonElement;
      const rememberMeCheckbox = document.getElementById('rememberMeCheckbox') as HTMLInputElement;

      rememberMeCheckbox.onchange = () => {
        this.rememberMe = rememberMeCheckbox.checked;
      };

      signupBtn.onclick = () => {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        sliderTab.style.left = '50%';
        loginBtn.classList.remove('text-white');
        loginBtn.classList.add('text-gray-400');
        signupBtn.classList.remove('text-gray-400');
        signupBtn.classList.add('text-white');
        this.title = 'Sign up';
      };

      loginBtn.onclick = () => {
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
        sliderTab.style.left = '0%';
        signupBtn.classList.remove('text-white');
        signupBtn.classList.add('text-gray-400');
        loginBtn.classList.remove('text-gray-400');
        loginBtn.classList.add('text-white');
        this.title = 'Welcome Back!';
      };

      if (submitBtn) {
        submitBtn.onclick = (event) => {
          event.preventDefault();
          this.validateForm();
        };
      }
    }
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  loadCredentials() {
    if (this.isBrowser) {
      const savedCredentials = localStorage.getItem('credentials');
      if (savedCredentials) {
        const credentials = JSON.parse(savedCredentials);
        (document.getElementById('emailInput') as HTMLInputElement).value = credentials.email;
        (document.getElementById('passwordInput') as HTMLInputElement).value = credentials.password;
        this.rememberMe = true;
      }
    }
  }

  saveCredentials(email: string, password: string) {
    if (this.isBrowser) {
      if (this.rememberMe) {
        localStorage.setItem('credentials', JSON.stringify({ email, password }));
      } else {
        localStorage.removeItem('credentials');
      }
    }
  }

  validateForm(): boolean {
    if (this.isBrowser) {
      const email = (document.getElementById('emailInput') as HTMLInputElement).value;
      const password = (document.getElementById('passwordInput') as HTMLInputElement).value;
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
      if (!email || !password) {
        this.errorMessage = 'You must enter both username and password to continue.';
        return false;
      } else if (!emailRegex.test(email)) {
        this.errorMessage = 'Please enter a valid email address.';
        return false;
      } else if (email === 'Admin@test.com' && password === '1234admin') {
        this.saveCredentials(email, password);
        localStorage.setItem('isAuthenticated', 'true');
        this.router.navigate(['/layout/dashboard'], { queryParams: { user: 'admin' } });
        return true;
      } else if (email === 'User@test.com' && password === '1234user') {
        this.saveCredentials(email, password);
        localStorage.setItem('isAuthenticated', 'true');
        this.router.navigate(['/layout/dashboard'], { queryParams: { user: 'user' } });
        return true;
      } else {
        this.errorMessage = 'Invalid credentials. Please try again.';
        return false;
      }
    }
  
    // If `isBrowser` is false, return `false` to handle that path
    return false;
  }
  

  onSubmit() {
    this.validateForm();
  }
}
