import { Component, OnInit } from '@angular/core';
import { Table } from '../component-tables/Table';
import { TabelFoot } from '../component-tables/TableFoot';
import { Category } from '../food-processors/Category';
import { Foots } from '../food-processors/Foots';
import { DatePipe } from '@angular/common';
import { payFoot } from '../table-detail/payFoot';

@Component({
  selector: 'app-foot-add-processors',
  templateUrl: './foot-add-processors.component.html',
  styleUrls: ['./foot-add-processors.component.css'],
  providers: [DatePipe]
})
export class FootAddProcessorsComponent implements OnInit {
 
  //dumy daya
  foots:Foots[]=[];
  categories:Category[]=[
    {id:1,name:"Sıcak İçecek",companyId:1},
    {id:2,name:"Tatlı",companyId:2},
  ];
  footsMain:Foots[]=[
    {id:1,name:"waffle",price: 10.10,companyId:2,category:this.categories[1]},
    {id:2,name:"çay",price: 5,companyId:2,category:this.categories[0]},
    {id:3,name:"kahve",price: 10,companyId:2,category:this.categories[0]}
  ];
  myPayFoot:payFoot[]=[]
  //dumy data
  
  getTable:Table=new Table();
  tableFoot!:TabelFoot;

  //for add foot to table
  selectedCategory!: Category;
  total:number=1;
  modelForAddToTable:Foots=new Foots()
  //for add foot to table

  constructor() { }
  ngOnInit(): void {
    this.getTable= {id:1,name:"Masa1",companyId:1};//get table
    this.tableFoot={id:1,table:this.getTable,foot:this.myPayFoot,companyId:1}//seach and get from sql 
  }
  //add foot to table process
  onChangeFootToCategories(deviceValue: Category) {
    this.foots = this.footsMain.filter(it => it.category.id == deviceValue.id);//fillTable
  }
  selectedForFee(id:number){
    this.modelForAddToTable=this.foots.filter(it => it.id == id)[0];
  }
  addFootToTable(){
    if(this.modelForAddToTable.id!=null){
      var index:number=-1;
     
      if(this.tableFoot.foot.length!=0){
        index = this.tableFoot.foot.findIndex((it) => it.foot.id === this.modelForAddToTable.id);
      }
      if (index >= 0) {
        this.tableFoot.foot[index].total+=this.total
      }else{
        var myfootTable= this.tableFoot;
        myfootTable.foot.push(new payFoot(this.modelForAddToTable,this.total,false)) ;
         this.tableFoot= myfootTable;
      }
    }else{
      alert("yemek seçin");
    }
  }   
  //add foot to table process
}
