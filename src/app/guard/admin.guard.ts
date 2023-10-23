import { Inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const adminGuard: CanActivateChildFn = (route, state) => {
  const token =localStorage.getItem('token');
  const router:Router= Inject(Router);
  if (token) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
