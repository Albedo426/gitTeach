import { Component, OnInit } from '@angular/core';
import { Table } from '../component-tables/Table';
import { TabelFood } from '../component-tables/TableFooD';
import { Category } from '../food-processors/Category';
import { Food } from '../food-processors/Food';
import { payFood } from './payFood';
@Component({

  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.css'],
 
})

export class TableDetailComponent implements OnInit {

  //damy data
  categories:Category[]=[
    {id:1,name:"Sıcak İçecek",companyId:1},
    {id:2,name:"Tatlı",companyId:2},
  ];
  foodsMain:Food[]=[
    {id:1,name:"waffle",price: 10.50,companyId:2,category:this.categories[1]},
    {id:2,name:"çay",price: 5.5,companyId:2,category:this.categories[0]},
    {id:3,name:"kahve",price: 10,companyId:2,category:this.categories[0]}
  ];
  tables:Table[]=[
    {id:1,name:"Masa1",companyId:1},
    {id:2,name:"Masa2",companyId:2},
  ];
  myPayFood:payFood[]=[];//masadakiler
  //damy data

  tableFood!:TabelFood;
  tableFoodModel!:payFood;
  intDivid:number=1;

  constructor() { }
  ngOnInit(): void {
    //init dumy data
    this.myPayFood.push(new  payFood(this.foodsMain[0],8,false))
    this.myPayFood.push(new  payFood(this.foodsMain[1],10,false))
    this.myPayFood.push(new  payFood(this.foodsMain[2],3,false))
    this.tableFood={id:1,food:this.myPayFood,table:this.tables[0],companyId:1}
     //init dumy data
  }
  //prepare for pay
  onChangeForFee(id:number){
    this.tableFoodModel= this.tableFood.food.filter(it => it.food.id == id)[0];
  }
  //prepare for pay

  //divid to fee
  getDivideFee(){
    var i=this.getMainFee();
      if(i!=0 && this.intDivid!=0 && this.intDivid!=null){
        return (i/this.intDivid);
      }
      return 0;
  }
  //divid to fee

  getMainFee(){
    var mainPrice=0;
    this.tableFood.food.forEach(element => {
      if(!element.paid){
          mainPrice+=element.food.price*element.total
      }
    });
    return +mainPrice
  }
  fullPay(){
    this.tableFood.food=[];
  }
  singlePay(){
    var count =this.tableFood.food.filter(it => it == this.tableFoodModel)[0].total;
    if(count!=1){
      this.tableFood.food.filter(it => it == this.tableFoodModel)[0].total--;
    }else{
      this.removeAtArray(this.tableFood.food.filter(it => it == this.tableFoodModel)[0].food.id)
    }    
  }
  
  private removeAtArray(mytext:number){
    for( var i = 0; i < this.tableFood.food.length; i++){ 
      if ( this.tableFood.food[i].food.id === mytext) { 
        this.tableFood.food.splice(i, 1); 
      }
    }
  }
}
