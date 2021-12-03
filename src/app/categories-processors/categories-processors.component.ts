import { Component, OnInit } from '@angular/core';
import { Category } from '../food-processors/Category';

@Component({
  selector: 'app-categories-processors',
  templateUrl: './categories-processors.component.html',
  styleUrls: ['./categories-processors.component.css']
})
export class CategoriesProcessorsComponent implements OnInit {

  selectedCategory!: Category;//selected category
  selectedFoots!: number;//selected category
  constructor() { }
  model:Category=new Category()
  categories:Category[]=[
    {id:1,name:"Sıcak İçecek",companyId:1},
    {id:2,name:"Tatlı",companyId:1},
  ];
  //removeCategory
  removIds:Array<number>=new Array();

  //update 
  footForUpdate!:Category;
  modelforUpdate:Category=new Category()
  selectedFootsForUpdate!: Category;//selected category
  ngOnInit(): void {
    this.model.companyId=1//default company
  }

  addCategoty(){
    this.categories.push(this.model)
    this.selectedCategory=new Category();
    this.model=new Category()
  }
  updateCheckedOptions(id:number){
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
  updatedata(foot:Category){
    const objIndex = this.categories.findIndex((x => x.id == foot.id));
    this.categories[objIndex]=this.modelforUpdate;
  }
  removeCategory(){
    for( var i = 0; i < this.removIds.length; i++){ 
      this.removeremoveCategorisToArray(this.removIds[i])
    }
  }
  private removeremoveCategorisToArray(mytext:any){
    for( var i = 0; i < this.categories.length; i++){ 
      if ( this.categories[i].id === mytext) { 
        this.categories.splice(i, 1); 
      }
    }
  }

  onChangeForUpdate(id:number){
    this.selectedFootsForUpdate = this.categories.filter(it => it.id == id)[0];
    this.modelforUpdate=this.selectedFootsForUpdate
    this.updatedata(this.modelforUpdate);
  }

  
}
