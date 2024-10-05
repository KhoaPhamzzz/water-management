import { Component, AfterViewInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLock, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';  // Ensure the import is correct
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [FontAwesomeModule, CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginComponent implements AfterViewInit {
  title: string = 'Welcome Back!';
  faEnvelope = faEnvelope;
  faLock = faLock;
  faUser = faUser;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  // Add social media icons
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faTwitter = faTwitter; // Note: Twitter icon is still referenced as faTwitter
  faGithub = faGithub;
  faYoutube = faYoutube;

  passwordVisible: boolean = false;
  errorMessage: string = '';
  rememberMe: boolean = false;

  constructor(private router: Router) {}

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  ngOnInit() {
    this.loadCredentials();
  }

  loadCredentials() {
    const savedCredentials = localStorage.getItem('credentials');
    if (savedCredentials) {
      const credentials = JSON.parse(savedCredentials);
      (document.getElementById('emailInput') as HTMLInputElement).value = credentials.email;
      (document.getElementById('passwordInput') as HTMLInputElement).value = credentials.password;
      this.rememberMe = true;
    }
  }

  saveCredentials(email: string, password: string) {
    if (this.rememberMe) {
      localStorage.setItem('credentials', JSON.stringify({ email, password }));
    } else {
      localStorage.removeItem('credentials');
    }
  }

  validateForm() {
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

  onSubmit() {
    this.validateForm();
  }

  ngAfterViewInit() {
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
      console.log('Signup button clicked');
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
      console.log('Login button clicked');
      signupForm.classList.add('hidden');
      loginForm.classList.remove('hidden');
      sliderTab.style.left = '0%';
      signupBtn.classList.remove('text-white');
      signupBtn.classList.add('text-black');
      loginBtn.classList.remove('text-black');
      loginBtn.classList.add('text-white');
      this.title = 'Welcome Back!';
    };

    if (!submitBtn) {
      console.error('Submit button not found!');
      return;
    }

    submitBtn.onclick = (event) => {
      event.preventDefault();
      this.validateForm();
    };
  }
}
