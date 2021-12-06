import { Component, OnInit } from '@angular/core';
import { BaseProcessor } from '../baseProcessor';
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
  baseProcessor!:BaseProcessor<Category>;
  
  constructor() { 
    this.baseProcessor= new BaseProcessor(new Category);
  }

  ngOnInit(): void {
    //this.insertModel.companyId=1//default company
    this.baseProcessor.insertModel.companyId=1
  }

  //for add proses
  addCategoty(){
    this.baseProcessor.insertModel.id=this.categories[this.categories.length - 1]!.id+1;//get last index and push insertmodel
    this.categories.push(this.baseProcessor.insertModel)
    this.baseProcessor.insertModel=new Category()
  }
  //for add proses

  //for remove proses
  changeStackRemove(id:number){
    this.baseProcessor.changeStackRemove(id)
  }
  removeCategories(){
    for( var i = 0; i < this.baseProcessor.removIds.length; i++){ 
      this.baseProcessor.removeToArray(this.categories,this.baseProcessor.removIds[i])
    }
  }
  //for remove proses

  //for update prosses
  changeUpdateData(id:number){
    this.baseProcessor.changeUpdateData(id,this.categories) 
  }
  //for update prosses
}
