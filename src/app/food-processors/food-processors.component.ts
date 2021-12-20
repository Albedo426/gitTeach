import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseProcessComponent } from '../BaseProcessComponent';
import { Category } from './Category';
import { Food } from './Food';
@Component({
  selector: 'app-food-processors',
  templateUrl: './food-processors.component.html',
  styleUrls: ['./food-processors.component.css']
})
export class FoodProcessorsComponent extends BaseProcessComponent<Food> {

  //damy data
  categories:Category[]=[
    {id:1,name:"Sıcak İçecek",companyId:1},
    {id:2,name:"Tatlı",companyId:2},
  ];
  foods:Food[]=[
    {id:1,name:"waffle",price: 10.10,companyId:2,category:this.categories[1]},
    {id:2,name:"çay",price: 5,companyId:2,category:this.categories[0]},
    {id:3,name:"kahve",price: 10,companyId:2,category:this.categories[0]}
  ];
  //damy data

  constructor() { 
    super(new Food);
  }


  override ngOnInit(): void {
    this.insertModel.companyId=1//defauld şirketId
  }

  //for add process
  override add():void{
    //alert(this.model.toString());
    this.insertModel.id=this.foods[this.foods.length - 1]!.id+1;//get last index and push insertmodel
    this.foods.push(this.insertModel)
    this.selectedCategory=new Category();
    this.insertModel=new Food()
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
           this.foods.splice(k, 1); 
        }
      }
    }
  }
  //for remove process

  //for update process
  changeUpdateData(id:number){
    this.updateModel = this.foods.filter(it => it.id == id)[0];
    this.updateData(this.updateModel);
  }
  updateData(food:Food){
    const objIndex = this.foods.findIndex((x => x.id == food.id));
    this.foods[objIndex]=this.updateModel;
  }

  onChangeCategoryInFoodFromUpdate(deviceValue: Category) {
    this.updateModel.category=deviceValue;
  }
  //for update process


}
