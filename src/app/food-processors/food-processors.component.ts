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
  selectedCategory!: Category;//selected category
  selectedFoots!: number;//selected category
  constructor() { }
  model:Foots=new Foots()
  categories:Category[]=[
    {id:1,name:"Sıcak İçecek",companyId:1},
    {id:2,name:"Tatlı",companyId:2},
  ];
  foots:Foots[]=[
    {id:1,name:"waffle",price: 10.10,companyId:2,category:this.categories[1]},
    {id:2,name:"çay",price: 5,companyId:2,category:this.categories[0]},
    {id:3,name:"kahve",price: 10,companyId:2,category:this.categories[0]}
  ];

  //removeFoots
  removIds:Array<number>=new Array();
  //update 
  footForUpdate!:Foots;
  
  modelforUpdate:Foots=new Foots()

  selectedFootsForUpdate!: Foots;//selected category
  
  ngOnInit(): void {
    this.model.companyId=1//defauld şirketId
  }
  
  //update foots
  onChangeForUpdate(id:number){
    this.selectedFootsForUpdate = this.foots.filter(it => it.id == id)[0];
    this.modelforUpdate=this.selectedFootsForUpdate
    this.updatedata(this.modelforUpdate);
  }

  updatedata(foot:Foots){
    const objIndex = this.foots.findIndex((x => x.id == foot.id));
    this.foots[objIndex]=this.modelforUpdate;
  }
  //forAddFoots
  addfoot():void{
    //alert(this.model.toString());
    this.foots.push(this.model)
    this.selectedCategory=new Category();
    this.model=new Foots()
  }
  onChange(deviceValue: Category) {
    this.model.category=deviceValue;
  }

  //remove foots
  updateCheckedOptions(id:number){
    if(this.removIds.includes(id)){
      this.removeAtArray(id);
    }else{
      this.removIds.push(id);
    }
  }
  removeFoot(){
    for( var i = 0; i < this.removIds.length; i++){ 
      this.removeFootsToArray(this.removIds[i])
    }
  }
  private removeFootsToArray(mytext:any){
    for( var i = 0; i < this.foots.length; i++){ 
      if ( this.foots[i].id === mytext) { 
        this.foots.splice(i, 1); 
      }
    }
  }
  private removeAtArray(mytext:number){
    for( var i = 0; i < this.removIds.length; i++){ 
      if ( this.removIds[i] === mytext) { 
        this.removIds.splice(i, 1); 
      }
    }
  }
}
