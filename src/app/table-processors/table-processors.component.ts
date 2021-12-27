import { Component, OnInit } from '@angular/core';
import { BaseProcessComponent } from '../Bases/BaseProcessComponent';
import { Table } from '../Model/Table';
import { TableService } from '../Services/table.service';

@Component({
  selector: 'app-table-processors',
  templateUrl: './table-processors.component.html',
  styleUrls: ['./table-processors.component.css'],
  providers:[]
})
export class TableProcessorsComponent extends BaseProcessComponent<Table> {
  updateData(id: Table): void {
    throw new Error('Method not implemented.');
  }

  //dummy data
  tables:Table[]=[];
  //dummy data
  constructor(private tableServices:TableService) { 
    super(new Table);
  }
  override ngOnInit(): void {
    //this.tableServices.getAllTable().subscribe(data=>{
      //olur
    //});
    this.init();
  }
  init(){
    this.tables=this.tableServices.getAll(1)
    this.insertModel.companyId=1
  }
  //for add process
  override add(){
    this.insertModel.id= this.tableServices.getLastIndex();//get last index and push insertmodel
    this.tableServices.add(this.insertModel)
    this.insertModel=new Table()
    this.insertModel.companyId=1
    this.init();
  }
   //for add process

   //for remove process
  
   override remove(){
    for( var i = 0; i < this.removeIds.length; i++){ 
      for( var k = 0; k <this.tables.length; k++){ 
        if ( this.tables[k].id === this.removeIds[i]) {
          this.tableServices.remove(this.tables[k].id); 
        }
      }      
    }
    this.init();
  }
  
  //for update process
  override changeUpdateData(id:number){
    this.updateModel= this.tables.filter(it => it.id == id)[0];
  }
  
  updateDataSave(){
    this.tableServices.update( this.updateModel); 
    this.init();
  }
}
