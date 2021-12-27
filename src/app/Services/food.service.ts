import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Category } from '../Model/Category';
import { Food } from '../Model/Food';

@Injectable()
export class FoodService {

  categories:Category[]=[
    {id:1,name:"Sıcak İçecek",companyId:1},
    {id:2,name:"Tatlı",companyId:1},
    {id:2,name:"Ana Yemek",companyId:2},
  ];
  foods:Food[]=[
    {id:1,name:"waffle",price: 10.10,companyId:1,category:this.categories[1]},
    {id:2,name:"çay",price: 5,companyId:1,category:this.categories[0]},
    {id:3,name:"oralet",price: 5,companyId:1,category:this.categories[0]},
    {id:4,name:"kahve",price: 10,companyId:2,category:this.categories[0]}
  ];
  constructor(private http:HttpClient) { }

  //geçici
  getLastIndex():number{//Observable<Table[]>{
    /*return this.http.get<Table[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.hadleError)
    );*/
    return this.foods[this.foods.length - 1]!.id+1;
  }

  getAll(companyId:number):Food[]{//Observable<Table[]>{
    /*return this.http.get<Table[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.hadleError)
    );*/
    return this.foods.filter((x => x.companyId==companyId ))
  }
  add(food:Food){
    this.foods.push(food)
  }
  remove(i:number){
    const objIndex = this.foods.findIndex((x => x.id ==i));
    this.foods.splice(objIndex, 1); 
  }
  update(updateModel: Food) {
    const objIndex = this.foods.findIndex((x => x.id == updateModel.id));
    this.foods[objIndex]=updateModel;
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
