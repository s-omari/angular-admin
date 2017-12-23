import {CanActivate , ActivatedRouteSnapshot ,RouterStateSnapshot ,Router} from '@angular/router'
import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';

@Injectable() 
export class AuthGuard implements CanActivate {

        constructor ( private router:Router ) {

        }

    // canActivate( 
    //     route:ActivatedRouteSnapshot ,
    //     state: RouterStateSnapshot
    // ): Observable<boolean> {
    //   //  return this.loginService.isLoggedIn();
    // return undefined;  
    // }



    private can: boolean = false;
    
    canActivate(
         
        //route:ActivatedRouteSnapshot 
        //     state: RouterStateSnapshot
    ) {
      console.log('ActivateGuard#canActivate called, can: ', this.can);
      if (!this.can) {
        alert('Please log in to enter admin panel!');

        this.router.navigate(['../auth']);
        return false;
      }
  
      return true;
    }
  
    setCanActivate(can) {
      this.can = can;
    }

    setCantActivate(can) {
        this.can = false;
      }


}