import { Inject } from '@angular/core';
import { CanActivateFn, Route, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const token =localStorage.getItem('token');
  const routh:Router= Inject(Router);
  if(token==null){
    return true;
  }
  routh.navigate(['/admin']);
  return false;
};
