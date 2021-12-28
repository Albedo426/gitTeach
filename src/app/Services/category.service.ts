import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../Model/Category';

@Injectable()
export class CategoryService  {

  constructor(private http:HttpClient) { }

  categories:Category[]=[
  ];
  path:any=environment.path

  getAll(companyId:number):Observable<Category[]>{
    var newpath=this.path+"/api/categoryForCompany/"+companyId+"?populate=company";
    return this.http.get<Category[]>(newpath).pipe(
      tap(data=>this.categories=data),
      catchError(this.hadleError)
    );
  }
  add(table:Category){
    this.categories.push(table)
    console.log(this.categories)
  }
  remove(i:number){
    var newpath=this.path+"/api/categories/"+i;
    console.log(newpath)
    return this.http.delete<Category>(newpath).pipe(
      tap(tap=>console.log(tap+"sadasd")),
      catchError(this.hadleError)
    );
  }
  update(updateModel: Category) {
    const objIndex = this.categories.findIndex((x => x.id == updateModel.id));
    this.categories[objIndex]=updateModel;
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
