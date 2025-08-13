import {
  CanActivateChildFn,
  CanActivateFn,
  CanLoad,
  CanMatch,
  CanMatchFn,
  Router,
} from '@angular/router';
import { AuthService } from './auth-service';
import { inject } from '@angular/core';

const checkAuth = (route: any, url: any) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  console.warn('checkAuth', auth.isLoggedIn);
  return auth.isLoggedIn ? true : router.navigate(['demo/login']);
  // return false;
};

export const authGuard: CanActivateFn = (route, state) =>
  checkAuth(route, state);
export const authChildGuard: CanActivateChildFn = (route, state) =>
  checkAuth(route, state);
export const authMatchGuard: CanMatchFn = (route, state) =>
  checkAuth(route, state);

// export const authGuard: CanActivateFn = (route, state) => {
//   const authService = inject(AuthService);
//   const router = inject(Router);
//   if (authService.isLoggedIn) {
//     console.log('auth-Guard', authService.isLoggedIn);
//     return true;
//   } else {
//     console.log('auth-Guard', authService.isLoggedIn);
//     router.navigate(['demo/login']);
//     return false;
//   }
// };
