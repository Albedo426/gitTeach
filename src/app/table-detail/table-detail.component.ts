import { Component, OnInit } from '@angular/core';
import { Table } from '../component-tables/Table';
import { TabelFoot } from '../component-tables/TableFoot';
import { Category } from '../food-processors/Category';
import { Foots } from '../food-processors/Foots';
import { payFoot } from './payFoot';
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
    {id:1,name:"waffle",price: 10.50,companyId:2,category:this.categories[1]},
    {id:2,name:"çay",price: 5.5,companyId:2,category:this.categories[0]},
    {id:3,name:"kahve",price: 10,companyId:2,category:this.categories[0]}
  ];
  tables:Table[]=[
    {id:1,name:"Masa1",companyId:1},
    {id:2,name:"Masa2",companyId:2},
  ];
  test:payFoot[]=[];
  tableFoot!:TabelFoot;
  tableFootModel!:payFoot;
  intDivid:number=1;

  ngOnInit(): void {

    this.test.push(new  payFoot(this.footsMain[0],8,false))
    this.test.push(new  payFoot(this.footsMain[1],10,false))
    this.test.push(new  payFoot(this.footsMain[2],3,false))
    this.tableFoot={id:1,foot:this.test,table:this.tables[0],companyId:1}
  }
  onChangeForFee(id:number){
    this.tableFootModel= this.tableFoot.foot.filter(it => it.foot.id == id)[0];
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
    this.tableFoot.foot.forEach(element => {
      if(!element.paid){
          mainPrice+=element.foot.price*element.menstruation
      }
    });
     
    return +mainPrice
  }
  fullPay(){
    this.tableFoot.foot=[];
  }
  singlePay(){
    var count =this.tableFoot.foot.filter(it => it == this.tableFootModel)[0].menstruation;
    if(count!=1){
      this.tableFoot.foot.filter(it => it == this.tableFootModel)[0].menstruation--;
    }else{
      this.removeAtArray(this.tableFoot.foot.filter(it => it == this.tableFootModel)[0].foot.id)
    }    
  }
  private removeAtArray(mytext:number){
    for( var i = 0; i < this.tableFoot.foot.length; i++){ 
      if ( this.tableFoot.foot[i].foot.id === mytext) { 
        this.tableFoot.foot.splice(i, 1); 
      }
    }
  }
}
