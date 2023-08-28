import { inject } from '@angular/core';
import { CanActivateFn , Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const jwt = sessionStorage.getItem('jwt');
  const router = inject(Router);
  if (jwt) {

    return true;
  } else{
    router.navigate(['/signin']);
    return false;
  }
 
};

