import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // if(localStorage.getItem('role') === 'HOD'){
    //   this.router.navigate(['hod']);
    //   return true;
    // }
    // else if(localStorage.getItem('role') === 'Staff'){
    //   this.router.navigate(['leave']);
    //   return true;
    // }
    // else{
    //   return false;
    // }
      
      return true;
  }
  
}
