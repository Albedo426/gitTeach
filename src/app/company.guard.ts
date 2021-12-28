import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { CompanyService } from "./Services/company.service";

@Injectable()
export class CompanyGuard implements CanActivate{
    constructor(private companyServices:CompanyService,private router:Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
        let logged=this.companyServices.isLogin()
        if(logged){
            return true;
        }
        this.router.navigate(["blank"])
        return false;
    }
    
}

