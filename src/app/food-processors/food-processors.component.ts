import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Category } from './Category';
import { Foots } from './Foots';
@Component({
  selector: 'app-food-processors',
  templateUrl: './food-processors.component.html',
  styleUrls: ['./food-processors.component.css']
})
export class FoodProcessorsComponent implements OnInit {

  //damy data
  categories:Category[]=[
    {id:1,name:"Sıcak İçecek",companyId:1},
    {id:2,name:"Tatlı",companyId:2},
  ];
  foots:Foots[]=[
    {id:1,name:"waffle",price: 10.10,companyId:2,category:this.categories[1]},
    {id:2,name:"çay",price: 5,companyId:2,category:this.categories[0]},
    {id:3,name:"kahve",price: 10,companyId:2,category:this.categories[0]}
  ];
  //damy data

  constructor() { }
  
  //for remove
  removIds:Array<number>=new Array();
  //for remove

  //for update 
  footForUpdate!:Foots;
  updateModel:Foots=new Foots()
  //for update

  //for add
  insertModel:Foots=new Foots()
  selectedCategory!: Category;//selected category
  //for add 

  ngOnInit(): void {
    this.insertModel.companyId=1//defauld şirketId
  }

  //for add process
  addfoot():void{
    //alert(this.model.toString());
    this.insertModel.id=this.foots[this.foots.length - 1]!.id+1;//get last index and push insertmodel
    this.foots.push(this.insertModel)
    this.selectedCategory=new Category();
    this.insertModel=new Foots()
  }
  onChangeCategoryInFootFromAdd(deviceValue: Category) {
    this.insertModel.category=deviceValue;
  }
  //for add process

  //for remove process
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
  removeFoots(){
    for( var i = 0; i < this.removIds.length; i++){ 
      this.removeToFootsArray(this.removIds[i])
    }
  }
  private removeToFootsArray(mytext:any){
    for( var i = 0; i < this.foots.length; i++){ 
      if ( this.foots[i].id === mytext) { 
        this.foots.splice(i, 1); 
      }
    }
  }
  //for remove process

  //for update process
  changeUpdateData(id:number){
    this.updateModel = this.foots.filter(it => it.id == id)[0];
    this.updateData(this.updateModel);
  }
  updateData(foot:Foots){
    const objIndex = this.foots.findIndex((x => x.id == foot.id));
    this.foots[objIndex]=this.updateModel;
  }
  onChangeCategoryInFootFromUpdate(deviceValue: Category) {
    this.updateModel.category=deviceValue;
  }
  //for update process


}
