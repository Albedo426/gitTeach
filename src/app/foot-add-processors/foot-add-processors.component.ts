import { Component, OnInit } from '@angular/core';
import { Table } from '../component-tables/Table';
import { TabelFoot } from '../component-tables/TableFoot';
import { Category } from '../food-processors/Category';
import { Foots } from '../food-processors/Foots';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-foot-add-processors',
  templateUrl: './foot-add-processors.component.html',
  styleUrls: ['./foot-add-processors.component.css'],
  providers: [DatePipe]
})
export class FootAddProcessorsComponent implements OnInit {
  constructor() { }
  menstruation!:String;
  
  selectedCategory!: Category;//selected category
  categories:Category[]=[
    {id:1,name:"Sıcak İçecek",companyId:1},
    {id:2,name:"Tatlı",companyId:2},
  ];
  footsMain:Foots[]=[
    {id:1,name:"waffle",price: 10.10,companyId:2,category:this.categories[1]},
    {id:2,name:"çay",price: 5,companyId:2,category:this.categories[0]},
    {id:3,name:"kahve",price: 10,companyId:2,category:this.categories[0]}
  ];
  tables:Table[]=[
    {id:1,name:"Masa1",companyId:1},
    {id:2,name:"Masa2",companyId:2},
  ];
  modelForAddToTable:Foots=new Foots()

  selectedFoots!: Foots;//selected category
  
  foots:Foots[]=[];

  tableFoot:TabelFoot[]=[]

  getTable:Table=new Table();
  ngOnInit(): void {
    this.getTable=this.tables[0];//get table set
  }
  onChange(deviceValue: Category) {
    this.foots = this.footsMain.filter(it => it.category.id == deviceValue.id);//fillTable
  }
  selectedData(id:number){
    this.selectedFoots = this.foots.filter(it => it.id == id)[0];
    this.modelForAddToTable=this.selectedFoots//selectedData
  }
  addFootToTable(){
      if(this.modelForAddToTable.id!=null){
        const index = this.tableFoot.findIndex((it) => it.foot.id === this.modelForAddToTable.id);
        
        if (index >= 0) {
          this.tableFoot[index].menstruation+=+this.menstruation
        }else{
          var myfootTable=new TabelFoot();
          myfootTable.id=1//datebase Ototmaik
          myfootTable.createDate= new Date();
          myfootTable.foot= this.modelForAddToTable;
          myfootTable.companyId=1//defauld company
          myfootTable.menstruation=+this.menstruation
          myfootTable.paid=false;
          myfootTable.table=this.getTable;
          this.tableFoot.push(myfootTable)
        }
        
      }else{
        alert("yemek seçin");
      }
  }  
}
