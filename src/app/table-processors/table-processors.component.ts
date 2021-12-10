import { Component, OnInit } from '@angular/core';
import { BaseProcessComponent } from '../BaseProcessComponent';
import { Table } from '../component-tables/Table';

@Component({
  selector: 'app-table-processors',
  templateUrl: './table-processors.component.html',
  styleUrls: ['./table-processors.component.css']
})
export class TableProcessorsComponent extends BaseProcessComponent<Table> {

  //dummy data
  tables:Table[]=[
    {id:1,name:"Masa1",companyId:1},
    {id:2,name:"Masa2",companyId:2},
  ];
  //dummy data

  constructor() { 
    super(new Table);
  }

  //for add process
  override add(){
    this.insertModel.id=this.tables[this.tables.length - 1]!.id+1;//get last index and push insertmodel
    this.tables.push(this.insertModel)
    this.insertModel=new Table()
  }
   //for add process

   //for remove process
  
   override remove(){
    for( var i = 0; i < this.removeIds.length; i++){ 
      for( var k = 0; k <this.tables.length; k++){ 
        if ( this.tables[k].id === this.removeIds[i]) { 
           this.tables.splice(k, 1); 
        }
      }      
    }
  }
  
  //for update process
  override changeUpdateData(id:number){
    this.updateModel= this.tables.filter(it => it.id == id)[0];
    this.updateData(this.updateModel);
  }
  
  override updateData(table:Table){
    const objIndex = this.tables.findIndex((x => x.id == table.id));
    this.tables[objIndex]=this.updateModel;
  }
    //for update process
}
