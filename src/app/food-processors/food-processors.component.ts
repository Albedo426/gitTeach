import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseProcessComponent } from '../Bases/BaseProcessComponent';
import { Category } from '../Model/Category';
import { Food } from '../Model/Food';
import { CategoryService } from '../Services/category.service';
import { FoodService } from '../Services/food.service';
@Component({
  selector: 'app-food-processors',
  templateUrl: './food-processors.component.html',
  styleUrls: ['./food-processors.component.css']
})
export class FoodProcessorsComponent extends BaseProcessComponent<Food> {

  //damy data
  categories:Category[]=[
  ];
  foods:Food[]=[
  ];
  //damy data

  constructor(private foodServices:FoodService,private categoryServices:CategoryService) { 
    super(new Food);
  }
  override ngOnInit(): void {
    this.insertModel.companyId=1//defauld şirketId
   
    this.init();
  }
  init(){
    this.foodServices.getAll(1).subscribe(data=>{
      this.foods=data
    });
    this.categoryServices.getAll(1).subscribe(data=>{
      this.categories=data
    });
  }
  //for add process
  add():void{
    //alert(this.model.toString());
    this.insertModel.id=   this.foodServices.getLastIndex()//get last index and push insertmodel
    this.foodServices.add(this.insertModel)
    this.selectedCategory=new Category();
    this.insertModel=new Food()
    this.insertModel.companyId=1//defauld şirketId
    this.init();
  }
  onChangeCategoryInFoodFromAdd(deviceValue: Category) {
    this.insertModel.category=deviceValue;
  }
  //for add process

  //for remove process
  override remove(){
    for( var i = 0; i < this.removeIds.length; i++){ 
      for( var k = 0; k <this.foods.length; k++){ 
        if ( this.foods[k].id === this.removeIds[i]) { 
          this.foodServices.remove(this.foods[k].id); 
          console.log(this.foods)
        }
      }
    }
    this.init();
  }
  //for remove process

  //for update process
  override changeUpdateData(id:number){
    this.updateModel= this.foods.filter(it => it.id == id)[0];
  }
  override updateDataSave(){
    this.foodServices.update( this.updateModel); 
    this.init();
  }
  onChangeCategoryInFoodFromUpdate(deviceValue: Category) {
    this.updateModel.category=deviceValue;
  }
  //for update process


}
