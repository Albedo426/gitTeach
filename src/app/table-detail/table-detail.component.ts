import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Food } from '../Model/Food';
import { payFood } from '../Model/payFood';
import { TabelFood } from '../Model/TableFood';
import { CategoryService } from '../Services/category.service';
import { FoodService } from '../Services/food.service';
import { TableDetailService } from '../Services/table-detail.service';
@Component({

  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.css'],
 
})

export class TableDetailComponent implements OnInit {


  foodsMain:Food[]=[
  ];

  myPayFood:payFood[]=[];//masadakiler
  //damy data

  tableFood!:TabelFood;
  tableFoodModel!:payFood;
  intDivid:number=1;
  params!:Params;
  tableId=0
  constructor(public activatedRout:ActivatedRoute,
    private categoryServices:CategoryService,
    private foodServices:FoodService,
    private tableDetailService:TableDetailService) { }

  ngOnInit(): void {
    //init dumy data
    this.activatedRout.params.subscribe(params=>{
      this.tableId=params['TableId']
      //veri tabanından çekme işllemi burası
      this.initParams()
    })
     //init dumy data
  }
  initParams(){
    this.foodsMain=this.foodServices.getAll(1);
    this.tableFood=this.tableDetailService.findTableFoodForTable( this.tableId,1)//seach and get from sql 
  }
  //prepare for pay
  onChangeForFee(id:number){
    this.tableFoodModel= this.tableFood.food.filter(it => it.food.id == id)[0];
  }
  //prepare for pay
  //divid to fee
  getDivideFee(){
    var i=this.getMainFee();
      if(i!=0 && this.intDivid!=0 && this.intDivid!=null){
        return (i/this.intDivid);
      }
      return 0;
  }
  //divid to fee
  getMainFee(){
    var mainPrice=0;
    this.tableFood.food.forEach(element => {
      if(!element.paid){
          mainPrice+=element.food.price*element.total
      }
    });
    return +mainPrice
  }
  fullPay(){
    this.tableDetailService.fullPay(this.tableFood.id)
    this.initParams()
  }
  singlePay(){
    this.tableDetailService.singlePay(this.tableFoodModel, this.tableFood.id)
    this.initParams()
  }
}
