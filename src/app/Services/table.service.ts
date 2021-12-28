import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../Model/Company';
import { Table } from '../Model/Table';

@Injectable()
export class TableService {
 
 
  tables : Table[] = [
    {id:1,name:"masa1"},
    {id:2,name:"masa2"},
    {id:3,name:"masa3"},
    {id:4,name:"masa4"},
    {id:5,name:"masa5"},
    {id:6,name:"masa6"}
    ];
  path:any=""
  constructor(private http:HttpClient) { }
  getLastIndex():number{//Observable<Table[]>{
    /*return this.http.get<Table[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.hadleError)
    );*/
    return this.tables[this.tables.length - 1]!.id+1;
  }
  getAll():Table[]{//Observable<Table[]>{
    /*return this.http.get<Table[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.hadleError)
    );*/
    return this.tables
  }
  getSingle(id:number,companyId:number):Table{
    const objIndex = this.tables.findIndex((x => x.id ==id));
    return this.tables[objIndex]
  }
  add(table:Table){
    this.tables.push(table)
  }
  remove(i:number){
    const objIndex = this.tables.findIndex((x => x.id ==i));
    this.tables.splice(objIndex, 1); 
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

