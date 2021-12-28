import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../Model/Category';

@Injectable()
export class CategoryService  {
  constructor(private http:HttpClient) { }

  categories:Category[]=[
    {id:1,name:"Sıcak İçecek"},
    {id:2,name:"Tatlı"},
    {id:3,name:"Ana Yemek"},
  ];
  getAll():Category[]{//Observable<Table[]>{
    /*return this.http.get<Table[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.hadleError)
    );*/
    return this.categories
  }
  add(table:Category){
    this.categories.push(table)
    console.log(this.categories)
  }
  remove(i:number){
    const objIndex = this.categories.findIndex((x => x.id ==i));
    this.categories.splice(objIndex, 1); 
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
