import { Component } from '@angular/core';
import { Company } from './Company';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  companyModel:Company=new Company();
  setDay:Date=new Date;
  companyList:Company[]=[]
  constructor() {
    this.setDay.setDate(this.setDay.getDate() + 1);
    this.companyList.push({id:1,companyName:"şfrket1",companyUserEmail:"company1",companyUserPassword:"pass123",companyMembershipDate:this.setDay})
    this.companyList.push({id:2,companyName:"şfrket2",companyUserEmail:"company2",companyUserPassword:"pass123",companyMembershipDate:this.setDay})
   
    var setDay2=new Date;
    this.companyList.push({id:3,companyName:"şfrket3",companyUserEmail:"company3",companyUserPassword:"pass123",companyMembershipDate:setDay2})
  }
  login(){
    var user= this.companyList.filter(
      user => user.companyUserEmail == this.companyModel.companyUserEmail && user.companyUserPassword == this.companyModel.companyUserPassword)[0];
    if(user){
      //kullanıcı var
    }else{
      //kullanıcı yok
    }
    
  }
  
  title = 'testProject';
}
