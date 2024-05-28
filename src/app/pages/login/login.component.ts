import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  ngAfterViewInit() {
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
    };

    loginBtn.onclick = () => {
      signupForm.classList.add('hidden');
      loginForm.classList.remove('hidden');
      sliderTab.style.left = '0%';
      signupBtn.classList.remove('text-white');
      signupBtn.classList.add('text-black');
      loginBtn.classList.remove('text-black');
      loginBtn.classList.add('text-white');
    };
  }
}
