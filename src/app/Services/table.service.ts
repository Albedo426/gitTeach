import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../Model/Company';
import { Table } from '../Model/Table';

@Injectable()
export class TableService {
 
  company:Company={
    "id": 1,
    "companyName": "fatih",
    "companyUserEmail": "test@a.com",
    "companyUserPassword": "asdasd",
    "companyMembershipDate": new Date,
  
  }
  tables : Table[] = [
    {id:1,name:"masa1",company:this.company},
    {id:2,name:"masa2",company:this.company},
    {id:3,name:"masa3",company:this.company},
    {id:4,name:"masa4",company:this.company},
    {id:5,name:"masa5",company:this.company},
    {id:6,name:"masa6",company:this.company}
    ];
  path:any=environment.path
  constructor(private http:HttpClient) { }
  getLastIndex():number{//Observable<Table[]>{
    /*return this.http.get<Table[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.hadleError)
    );*/
    return this.tables[this.tables.length - 1].id+1;
  }
  getAll(companyId:number):Observable<Table[]>{
    var newpath=this.path+"/api/tableForCompany/"+companyId+"?populate=company";
    return this.http.get<Table[]>(newpath).pipe(
      tap(data=>this.tables=data),
      catchError(this.hadleError)
    );
  }
  getSingle(id:number,companyId:number):Table{
    const objIndex = this.tables.findIndex((x => x.id ==id && x.company.id==companyId));
    return this.tables[objIndex]
  }
  // eklemede sıkıntı var güncelleme yapılmadı daha
  add(table:Table):Observable<Table>{
    var newpath=this.path+"/api/tables";
    var mtable= new Table();
    mtable.id=16;
    mtable.name="test"
    mtable.company=this.company
    var eachProduct ={
          data: JSON.stringify(mtable)};
    var jsonFormatter='{"data":'+JSON.stringify(mtable)+"}"
    console.log( jsonFormatter)

    return this.http.post<Table>(newpath,eachProduct).pipe(
      tap(tap=>console.log(tap+"sadasd")),
      catchError(this.hadleError)
    );
  }
  remove(i:number){
    var newpath=this.path+"/api/tables/"+i;
    console.log(newpath)
    return this.http.delete<Table>(newpath).pipe(
      tap(tap=>console.log(tap+"sadasd")),
      catchError(this.hadleError)
    );
    
  }
  update(updateModel: Table) {
    const objIndex = this.tables.findIndex((x => x.id == updateModel.id));
    this.tables[objIndex]=updateModel;
  }

  hadleError(err:HttpErrorResponse){
    let errrorMessage=""
    if(err.error instanceof ErrorEvent){
      errrorMessage="bir hata olutşu"+err.error.message
    }else{
      errrorMessage="Sistem hatası oluştu"+err.error.name
    }
    return throwError(errrorMessage)
  }
}

