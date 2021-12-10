import { Component, OnInit } from '@angular/core';
import { BaseProcessComponent } from '../BaseProcessComponent';
import { Category } from '../food-processors/Category';

@Component({
  selector: 'app-categories-processors',
  templateUrl: './categories-processors.component.html',
  styleUrls: ['./categories-processors.component.css']
})
export class CategoriesProcessorsComponent extends BaseProcessComponent<Category> {
 

  //damyData
  categories:Category[]=[
    {id:1,name:"Sıcak İçecek",companyId:1},
    {id:2,name:"Tatlı",companyId:1},
  ];
  //damyData
  
  constructor() { 
    super(new Category);
  }

  override ngOnInit(): void {
    //this.insertModel.companyId=1//default company
    this.insertModel.companyId=1
  }
  
  //for add proses
  override add(): void {
    this.insertModel.id=this.categories[this.categories.length - 1]!.id+1;//get last index and push insertmodel
    this.categories.push(this.insertModel)
    this.insertModel=new Category()
  }
  //for add proses

  //for remove proses
  override remove(){
    for( var i = 0; i < this.removeIds.length; i++){ 
      for( var k = 0; k <this.categories.length; k++){ 
        if ( this.categories[k].id === this.removeIds[i]) { 
           this.categories.splice(k, 1); 
        }
      }
    }
  }
  //for remove proses

  //for update prosses
  override changeUpdateData(id:number){
    this.updateModel = this.categories.filter(it => it.id == id)[0];
    this.updateData(this.updateModel);
  }
  override updateData(category:Category): void {
    const objIndex = this.categories.findIndex((x => x.id == category.id));
    this.categories[objIndex]=this.updateModel;
  }

  //for update prosses
}
