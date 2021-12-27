import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Company } from '../Model/Company';

@Injectable()
export class CompanyService {
  setDay:Date=new Date;
  companyList:Company[]=[]
  islogin=false;
  constructor(private http:HttpClient) { 
    
    this.setDay.setDate(this.setDay.getDate() + 1);
    this.companyList.push({id:1,companyName:"şfrket1",companyUserEmail:"company1",companyUserPassword:"pass123",companyMembershipDate:this.setDay})
    this.companyList.push({id:2,companyName:"şfrket2",companyUserEmail:"company2",companyUserPassword:"pass123",companyMembershipDate:this.setDay})
    this.companyList.push({id:2,companyName:"tester",companyUserEmail:"1",companyUserPassword:"1",companyMembershipDate:this.setDay})
   
    var setDay2=new Date;
    this.companyList.push({id:3,companyName:"şfrket3",companyUserEmail:"company3",companyUserPassword:"pass123",companyMembershipDate:setDay2})}

  isLogin():boolean{
    return this.islogin
  }
  login(company:Company):Company{//Observable<Table[]>{
    /*return this.http.get<Table[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.hadleError)
    );*/
 
    for (let index = 0; index < this.companyList.length; index++) {
      if(this.companyList[index].companyUserEmail===company.companyUserEmail && this.companyList[index].companyUserPassword===company.companyUserPassword ){
        this.islogin=true
        return this.companyList[index]
      }
    }
    return null!
  }
  add(table:Company){
    this.companyList.push(table)
  }
  update(updateModel:Company){
    const objIndex = this.companyList.findIndex((x => x.id == updateModel.id));
    this.companyList[objIndex]=updateModel;
  }
  hadleError(err:HttpErrorResponse){
    let errrorMessage=""
    if(err.error instanceof ErrorEvent){
      errrorMessage="bir hata olutşu"+err.error.message
    }else{
      errrorMessage="Sistem hatası oluştu"
    }
    return throwError(errrorMessage)
  }
}
