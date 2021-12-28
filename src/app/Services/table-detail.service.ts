import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Category } from '../Model/Category';
import { Company } from '../Model/Company';
import { Food } from '../Model/Food';
import { payFood } from '../Model/payFood';
import { Table } from '../Model/Table';
import { TabelFood } from '../Model/TableFood';

@Injectable()
export class TableDetailService {
 
  categories:Category[]=[
    {id:1,name:"Sıcak İçecek",companyId:1},
    {id:2,name:"Tatlı",companyId:1},
    {id:2,name:"Ana Yemek",companyId:2},
  ];
  foodsMain:Food[]=[
    {id:1,name:"waffle",price: 10.10,companyId:1,category:this.categories[1]},
    {id:3,name:"oralet",price: 5,companyId:1,category:this.categories[0]},
    {id:4,name:"kahve",price: 10,companyId:2,category:this.categories[0]}
  ];
  company:Company={
    "id": 1,
    "companyName": "string",
    "companyUserEmail": "string",
    "companyUserPassword": "SVGStringList",
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
  myPayFood:payFood[]=[]
  tableFood:TabelFood[]=[
    {id:1,table:this.tables[0],food:this.myPayFood,companyId:1},
    {id:2,table:this.tables[1],food:this.myPayFood,companyId:1},
    {id:3,table:this.tables[2],food:this.myPayFood,companyId:1},
    {id:4,table:this.tables[3],food:this.myPayFood,companyId:1},
    {id:5,table:this.tables[4],food:this.myPayFood,companyId:1},
    {id:6,table:this.tables[5],food:this.myPayFood,companyId:1},
  ];
  constructor(private http:HttpClient) {
    this.myPayFood.push(new  payFood(this.foodsMain[0],8,false))
    this.myPayFood.push(new  payFood(this.foodsMain[1],10,false))
    this.myPayFood.push(new  payFood(this.foodsMain[2],3,false))
   }
  findTableFoodForTable(id:number,companyId:number):TabelFood{//tablefood çağırma tablo ide göre
    const objIndex = this.tableFood.findIndex((x => x.table.id == id && x.companyId==companyId));
    return this.tableFood[objIndex]
  }
  addForNewFoodToTable(id:number,myfood:payFood){//Yeni Yemek ekleme TableFood ıd Ve eklenecek payfood
    const objIndex = this.tableFood.findIndex((x => x.id == id));
    var myTableFood =this.tableFood[objIndex]
    myTableFood.food.push( myfood);//
  }
  addFoodQuantitiy(foodId:number,tableFoodId:number,quantitiy:number){//Yeni Yemek ekleme TableFood ıd Ve eklenecek payfood
      const objIndex = this.tableFood.findIndex((x => x.id == tableFoodId));
      const singleTableFood=this.tableFood[objIndex].food;
      const objIndex2 = singleTableFood.findIndex((x => x.food.id == foodId));
      singleTableFood[objIndex2].total+=quantitiy//
  }
  
  fullPay(tableFoodId:number){
    const objIndex = this.tableFood.findIndex((x => x.id == tableFoodId));
    this.tableFood[objIndex].food.forEach(data=>{
      data.paid=true;
    });
  }
  singlePay(myPayFood:payFood,tableId:number){//myPayFood food içindeki id ile olucak
    const objIndex = this.tableFood.findIndex((x => x.id == tableId));
    var myTableFoot =this.tableFood[objIndex]
    var count =myTableFoot.food.filter(it => it == myPayFood)[0].total;
    if(count!=1){
      myTableFoot.food.filter(it => it == myPayFood)[0].total--;
    }else{
      myTableFoot.food.filter(it => it == myPayFood)[0].total--;
      myTableFoot.food.filter(it => it == myPayFood)[0].paid=true
    }    
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
