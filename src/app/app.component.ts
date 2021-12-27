import { Component } from '@angular/core';
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router';
import { Company } from './Model/Company';
import { CompanyService } from './Services/company.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  companyModel:Company=new Company();
  isLogin:boolean=false;
  constructor(public router: Router,private companyServices:CompanyService) {
  }
  login(){
    var myCompany:Company=this.companyServices.login(this.companyModel);
    if(myCompany!=null){
      this.companyModel=myCompany
      this.isLogin=true;
    }else{
      alert("kullanıcı bulunamadı");
    }
  }
  register() {
    this.companyServices.add(this.companyModel);
    this.login();
  }
  logOut(){
    this.isLogin=false;
    this.companyModel=new Company()
  }
  update(){
    this.companyServices.update(this.companyModel);
  }
}
