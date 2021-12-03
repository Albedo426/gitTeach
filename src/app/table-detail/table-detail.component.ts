import { Component, OnInit } from '@angular/core';
import { Table } from '../component-tables/Table';
import { TabelFoot } from '../component-tables/TableFoot';
import { Category } from '../food-processors/Category';
import { Foots } from '../food-processors/Foots';
@Component({

  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.css'],
 
})

export class TableDetailComponent implements OnInit {

  constructor() { }
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
  tableFoot:TabelFoot[]=[
    {id:1,foot:this.footsMain[0],table:this.tables[0],paid:false,menstruation:8,createDate:new Date(),companyId:1},
    {id:2,foot:this.footsMain[1],table:this.tables[0],paid:false,menstruation:10,createDate:new Date(),companyId:1},
    {id:3,foot:this.footsMain[1],table:this.tables[0],paid:true,menstruation:10,createDate:new Date(),companyId:1},
    {id:4,foot:this.footsMain[2],table:this.tables[0],paid:false,menstruation:4,createDate:new Date(),companyId:1},
  ]
  tableFootModel!:TabelFoot;
  
  intDivid:number=1;
  ngOnInit(): void {
  }
  onChangeForFee(id:number){
    this.tableFootModel= this.tableFoot.filter(it => it.id == id)[0];
  }
  getDivideFee(){
    var i=this.getMainFee();
    
      if(i!=0 && this.intDivid!=0 && this.intDivid!=null){
        return (i/this.intDivid);
      }
      return 0;
  }
   
  getMainFee(){
    var mainPrice=0;
    this.tableFoot.forEach(element => {
      if(!element.paid){
      mainPrice+=element.foot.price*element.menstruation
      }
    });
    return +mainPrice
  }
  fullPay(){
    this.tableFoot=[];
  }
  singlePay(){
    var count =this.tableFoot.filter(it => it == this.tableFootModel)[0].menstruation;
    if(count!=1){
      this.tableFoot.filter(it => it == this.tableFootModel)[0].menstruation--;
    }else{
      this.removeAtArray(this.tableFoot.filter(it => it == this.tableFootModel)[0].id)
    }    
  }
  private removeAtArray(mytext:number){
    for( var i = 0; i < this.tableFoot.length; i++){ 
      if ( this.tableFoot[i].id === mytext) { 
        this.tableFoot.splice(i, 1); 
      }
    }
  }
}
