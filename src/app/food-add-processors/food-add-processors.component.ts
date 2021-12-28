import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../Model/Food';
import { Category } from '../Model/Category';
import { payFood } from '../Model/payFood';
import { TabelFood } from '../Model/TableFood';
import { CategoryService } from '../Services/category.service';
import { FoodService } from '../Services/food.service';
import { TableDetailService } from '../Services/table-detail.service';

@Component({
  selector: 'app-food-add-processors',
  templateUrl: './food-add-processors.component.html',
  styleUrls: ['./food-add-processors.component.css'],
  providers: [DatePipe]
})
export class FoodAddProcessorsComponent implements OnInit {
 
  //dumy daya
  foods:Food[]=[];
  categories:Category[]=[];
  foodsMain:Food[]=[ ];
  myPayFood:payFood[]=[]
  //dumy data
  tableFood!:TabelFood;

  //for add food to table
  selectedCategory!: Category;
  total:number=1;
  modelForAddToTable:Food=new Food()
  //for add food to table
  tableId=0
  constructor(public activatedRout:ActivatedRoute,
    private categoryServices:CategoryService,
    private foodServices:FoodService,
    private tableDetailService:TableDetailService) { }//table servis de eklenecek //CAtegory Servis eklenecek/food servis

  ngOnInit(): void {
    //kategoriler all
    this.activatedRout.params.subscribe(params=>{
       //seçili table  id
      this.tableId=params['TableId']
      this.initParams()
    })
  }
  
  initParams(){
    this.tableFood=this.tableDetailService.findTableFoodForTable( this.tableId,1)//seach and get from sql 
    this.categoryServices.getAll(1).subscribe(data=>{
      this.categories=data
    });
    this.foodServices.getAll(1).subscribe(data=>{
      this.foods=data
    });
  }
  //add food to table process
  onChangeFoodToCategories(deviceValue: Category) {//selectedden kategori seçince
    //tüm yemekleri  ilgili kategoiye göre çek  foods parametresine aktar foods main gereksiz
    this.foods = this.foodsMain.filter(it => it.category.id == deviceValue.id);//fillTable
  }
  selectedForFee(id:number){
    this.modelForAddToTable=this.foods.filter(it => it.id == id)[0];// bir şeye gerek yok  
    //modelForAddToTable seçilen food var ekleme işlemi için gerekli
  }
  addFoodToTable(){
    if(this.modelForAddToTable.id!=null){
      var index:number=-1;
      if(this.tableFood.food.length!=0){
        index = this.tableFood.food.findIndex((it) => it.food.id === this.modelForAddToTable.id);
      }
      if (index >= 0) {
        this.tableDetailService.addFoodQuantitiy  ( this.tableFood.food[index].food.id, this.tableFood.id,this.total)
      }else{
        var myfoodTable= this.tableFood;
        this.tableDetailService.addForNewFoodToTable(myfoodTable.id,new payFood(this.modelForAddToTable,this.total,false))
        this.tableFood= myfoodTable;
      }
      this.initParams();
    }else{
      alert("yemek seçin");
    }
  }   
  //add food to table process
}
