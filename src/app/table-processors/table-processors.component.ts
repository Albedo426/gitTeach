import { Component, OnInit } from '@angular/core';
import { Table } from '../component-tables/Table';

@Component({
  selector: 'app-table-processors',
  templateUrl: './table-processors.component.html',
  styleUrls: ['./table-processors.component.css']
})
export class TableProcessorsComponent implements OnInit {

  constructor() { }
  selectedCategory!: Table;//selected category
  selectedFoots!: number;//selected category
  model:Table=new Table()
  tables:Table[]=[
    {id:1,name:"Masa1",companyId:1},
    {id:2,name:"Masa2",companyId:2},
  ];
  //removeFoots
  removIds:Array<number>=new Array();
  //update 
  footForUpdate!:Table;
  
  modelforUpdate:Table=new Table()

  selectedFootsForUpdate!: Table;//selected category
  
  ngOnInit(): void {
  }
  addTable(){
    this.tables.push(this.model)
    this.selectedCategory=new Table();
    this.model=new Table()
  }
  updateCheckedOptions(id:number){
    if(this.removIds.includes(id)){
      this.removeAtArray(id);
    }else{
      this.removIds.push(id);
    }
  }

  removeTable(){
    for( var i = 0; i < this.removIds.length; i++){ 
      this.removeremoveCategorisToArray(this.removIds[i])
    }
  }
  private removeremoveCategorisToArray(mytext:any){
    for( var i = 0; i < this.tables.length; i++){ 
      if ( this.tables[i].id === mytext) { 
        this.tables.splice(i, 1); 
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

  onChangeForUpdate(id:number){
    this.selectedFootsForUpdate = this.tables.filter(it => it.id == id)[0];
    this.modelforUpdate=this.selectedFootsForUpdate
    this.updatedata(this.modelforUpdate);
  }
  
  updatedata(table:Table){
    const objIndex = this.tables.findIndex((x => x.id == table.id));
    this.tables[objIndex]=this.modelforUpdate;
  }
}
