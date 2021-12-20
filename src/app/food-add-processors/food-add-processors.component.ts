import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Food } from '../food-processors/Food';
import { Category } from '../food-processors/Category';
import { payFood } from '../table-detail/payFood';
import { Table } from '../component-tables/Table';
import { TabelFood } from '../component-tables/TableFooD';

@Component({
  selector: 'app-food-add-processors',
  templateUrl: './food-add-processors.component.html',
  styleUrls: ['./food-add-processors.component.css'],
  providers: [DatePipe]
})
export class FoodAddProcessorsComponent implements OnInit {
 
  //dumy daya
  foods:Food[]=[];
  categories:Category[]=[
    {id:1,name:"Sıcak İçecek",companyId:1},
    {id:2,name:"Tatlı",companyId:2},
  ];
  foodsMain:Food[]=[
    {id:1,name:"waffle",price: 10.10,companyId:2,category:this.categories[1]},
    {id:2,name:"çay",price: 5,companyId:2,category:this.categories[0]},
    {id:3,name:"kahve",price: 10,companyId:2,category:this.categories[0]}
  ];
  myPayFood:payFood[]=[]
  //dumy data
  
  getTable:Table=new Table();
  tableFood!:TabelFood;

  //for add food to table
  selectedCategory!: Category;
  total:number=1;
  modelForAddToTable:Food=new Food()
  //for add food to table

  constructor() { }
  ngOnInit(): void {
    this.getTable= {id:1,name:"Masa1",companyId:1};//get table
    this.tableFood={id:1,table:this.getTable,food:this.myPayFood,companyId:1}//seach and get from sql 
  }
  //add food to table process
  onChangeFoodToCategories(deviceValue: Category) {
    this.foods = this.foodsMain.filter(it => it.category.id == deviceValue.id);//fillTable
  }
  selectedForFee(id:number){
    this.modelForAddToTable=this.foods.filter(it => it.id == id)[0];
  }
  addFoodToTable(){
    if(this.modelForAddToTable.id!=null){
      var index:number=-1;
     
      if(this.tableFood.food.length!=0){
        index = this.tableFood.food.findIndex((it) => it.food.id === this.modelForAddToTable.id);
      }
      if (index >= 0) {
        this.tableFood.food[index].total+=this.total
      }else{
        var myfoodTable= this.tableFood;
        myfoodTable.food.push(new payFood(this.modelForAddToTable,this.total,false)) ;
         this.tableFood= myfoodTable;
      }
    }else{
      alert("yemek seçin");
    }
  }   
  //add food to table process
}
