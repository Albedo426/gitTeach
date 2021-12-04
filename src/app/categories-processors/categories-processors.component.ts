import { Component, OnInit } from '@angular/core';
import { Category } from '../food-processors/Category';

@Component({
  selector: 'app-categories-processors',
  templateUrl: './categories-processors.component.html',
  styleUrls: ['./categories-processors.component.css']
})
export class CategoriesProcessorsComponent implements OnInit {
  //damyData
  categories:Category[]=[
    {id:1,name:"Sıcak İçecek",companyId:1},
    {id:2,name:"Tatlı",companyId:1},
  ];
  //damyData

  //for insert
  insertModel:Category=new Category()
  //for insert

  //for remove
  removIds:Array<number>=new Array();
  //for remove

  //for update 
  updateModel:Category=new Category()
  //for update 
  constructor() { }

  ngOnInit(): void {
    this.insertModel.companyId=1//default company
  }
  //for add proses
  addCategoty(){
    this.insertModel.id=this.categories[this.categories.length - 1]!.id+1;//get last index and push insertmodel
    this.categories.push(this.insertModel)
    //this.selectedCategory=new Category();
    this.insertModel=new Category()
  }
  //for add proses

  //for remove proses
  changeStackRemove(id:number){
    if(this.removIds.includes(id)){
      this.removeAtArray(id);
    }else{
      this.removIds.push(id);
    }
  }
  private removeAtArray(mytext:number){
    for( var i = 0; i < this.removIds.length; i++){ 
      if ( this.removIds[i] === mytext) { 
        this.removIds.splice(i, 1); 
      }
    }
  }
  removeCategories(){
    for( var i = 0; i < this.removIds.length; i++){ 
      this.removeToCategoriesArray(this.removIds[i])
    }
  }
  private removeToCategoriesArray(mytext:any){
    for( var i = 0; i < this.categories.length; i++){ 
      if ( this.categories[i].id === mytext) { 
        this.categories.splice(i, 1); 
      }
    }
  }
  //for remove proses

  //for update prosses
  changeUpdateData(id:number){
    this.updateModel = this.categories.filter(it => it.id == id)[0];
    this.updateData(this.updateModel);
  }
  private updateData(category:Category){
    const objIndex = this.categories.findIndex((x => x.id == category.id));
    this.categories[objIndex]=this.updateModel;
  }
   //for update prosses
}
