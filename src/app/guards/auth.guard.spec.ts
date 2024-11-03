import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    });

    authGuard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should return true if the user is authenticated', () => {
    spyOn(localStorage, 'getItem').and.returnValue('true');
    expect(authGuard.canActivate({} as any, {} as any)).toBeTrue();
  });

  it('should navigate to /login if the user is not authenticated', () => {
    spyOn(localStorage, 'getItem').and.returnValue('false');
    expect(authGuard.canActivate({} as any, {} as any)).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
