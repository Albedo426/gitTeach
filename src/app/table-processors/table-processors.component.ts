import { Component, OnInit } from '@angular/core';
import { Table } from '../component-tables/Table';

@Component({
  selector: 'app-table-processors',
  templateUrl: './table-processors.component.html',
  styleUrls: ['./table-processors.component.css']
})
export class TableProcessorsComponent implements OnInit {

  //dumy data
  tables:Table[]=[
    {id:1,name:"Masa1",companyId:1},
    {id:2,name:"Masa2",companyId:2},
  ];
  //dumy data

 
  //for insert
  insertModel:Table=new Table()
  //for insert

  //for remove
  removIds:Array<number>=new Array();
  //for remove

  //for update  
  updateModel:Table=new Table()
  //for update  
  
  constructor() { }
  ngOnInit(): void {
  }
  //for add process
  addTable(){
    this.insertModel.id=this.tables[this.tables.length - 1]!.id+1;//get last index and push insertmodel
    this.tables.push(this.insertModel)
    this.insertModel=new Table()
  }
   //for add process

   //for remove process
  changeStackRemove(id:number){
    if(this.removIds.includes(id))
      this.removeAtArray(id);
    else
      this.removIds.push(id);
    
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
  //for remove process

  //for update process
  changeUpdateData(id:number){
    this.updateModel= this.tables.filter(it => it.id == id)[0];
    this.updatedata(this.updateModel);
  }
  
  updatedata(table:Table){
    const objIndex = this.tables.findIndex((x => x.id == table.id));
    this.tables[objIndex]=this.updateModel;
  }
    //for update process
}
