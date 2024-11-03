import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    console.log('AuthGuard: isAuthenticated:', isAuthenticated);
  
    if (isAuthenticated) {
      return true;
    } else {
      console.log('AuthGuard: Redirecting to /login');
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
