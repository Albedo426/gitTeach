import { Component, OnInit } from '@angular/core';
import { Table } from './table';
@Component({
  selector: 'app-component-tables',
  templateUrl: './component-tables.component.html',
  styleUrls: ['./component-tables.component.css']
})
export class ComponentTablesComponent implements OnInit {
  test = "sa"; 
//...do other products.push(_) to add more objects...
   tables : Table[] = [
    {id:1,tableName:"masa1",companyId:1},
    {id:2,tableName:"masa2",companyId:1},
    {id:3,tableName:"masa3",companyId:1},
    {id:4,tableName:"masa4",companyId:1},
    {id:5,tableName:"masa5",companyId:1},
    {id:6,tableName:"masa6",companyId:1}
    ];
  number: number | undefined;
  constructor() {
    
   }

  ngOnInit(): void {
    this.number=this.tables.length;
  }

}
