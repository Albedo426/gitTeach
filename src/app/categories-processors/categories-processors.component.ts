import { Component, OnInit } from '@angular/core';
import { BaseProcessComponent } from '../Bases/BaseProcessComponent';
import { Category } from '../Model/Category';
import { CategoryService } from '../Services/category.service';

@Component({
  selector: 'app-categories-processors',
  templateUrl: './categories-processors.component.html',
  styleUrls: ['./categories-processors.component.css']
})
export class CategoriesProcessorsComponent extends BaseProcessComponent<Category> {
 

  //damyData
  categories:Category[]=[];
  //damyData
  
  constructor(private categoryServices:CategoryService) { 
    super(new Category);
  }

  override ngOnInit(): void {
    //this.insertModel.companyId=1//default company
    
    this.insertModel.companyId=1
    this.init()
  }
  init(){
    this.categoryServices.getAll(1).subscribe(data=>{
      this.categories=data
    });
  }
  
  //for add proses
  override add(): void {
    this.insertModel.id=this.categories[this.categories.length - 1]!.id+1;//get last index and push insertmodel
    console.log(this.categories[this.categories.length - 1]!.id)
    this.categoryServices.add(this.insertModel)
    this.insertModel=new Category()
    this.insertModel.companyId=1
    this.init()
  }
  //for add proses

  //for remove proses
  override remove(){
    for( var i = 0; i < this.removeIds.length; i++){ 
      for( var k = 0; k <this.categories.length; k++){ 
        if ( this.categories[k].id === this.removeIds[i]) { 
          this.categoryServices.remove(this.categories[k].id).subscribe(table =>{ 
            const objIndex = this.categories.findIndex((x => x.id ==table.id));
            this.categories.splice(objIndex, 1); }); 
        }
      }
    }
    this.init();
  }
  //for remove proses
  
  //for update prosses
 
  override changeUpdateData(id:number){
    this.updateModel= this.categories.filter(it => it.id == id)[0];
  }
  updateDataSave(){
    this.categoryServices.update( this.updateModel); 
    this.init();
  }

  //for update prosses
}
