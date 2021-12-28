import { Component, OnInit } from '@angular/core';
import { BaseProcessComponent } from '../Bases/BaseProcessComponent';
import { Company } from '../Model/Company';
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
  company:Company={
    "id": 1,
    "companyName": "fatih",
    "companyUserEmail": "test@a.com",
    "companyUserPassword": "asdasd",
    "companyMembershipDate": new Date,
  
  }
  //dummy data
  tables:Table[]=[];
  //dummy data
  constructor(private tableServices:TableService) { 
    super(new Table);
  }
  override ngOnInit(): void {
    this.tableServices.getAll(1).subscribe(data=>{
      this.tables=data
    });
    this.init();
  }
  init(){
    //this.tables=this.tableServices.getAll(1)
    //this.insertModel.companyId=1
  }
  //for add process
  override add(){
    this.insertModel.id= this.tableServices.getLastIndex();//get last index and push insertmodel
    //this.insertModel.company=this.company
    this.tableServices
    .add(this.insertModel)
    .subscribe(table => this.tables.push(table));
  
    this.insertModel=new Table()
    this.init();
  }
   //for add process

   //for remove process
  
   override remove(){
    for( var i = 0; i < this.removeIds.length; i++){ 
      for( var k = 0; k <this.tables.length; k++){ 
        if ( this.tables[k].id === this.removeIds[i]) {
          this.tableServices.remove(this.tables[k].id).subscribe(table =>{ 
            const objIndex = this.tables.findIndex((x => x.id ==table.id));
            this.tables.splice(objIndex, 1); }); 
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
