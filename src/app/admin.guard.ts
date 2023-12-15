import {CanActivateFn, Router, UrlTree} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";

export const adminGuard: CanActivateFn = (route, state): boolean | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAdmin()) {
    return true;
  }
  return router.parseUrl('/');
};
