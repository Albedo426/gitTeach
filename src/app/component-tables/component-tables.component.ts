import { Component, OnInit } from '@angular/core';
import { Table } from './Table';
@Component({
  selector: 'app-component-tables',
  templateUrl: './component-tables.component.html',
  styleUrls: ['./component-tables.component.css']
})
export class ComponentTablesComponent implements OnInit {
  test = "sa"; 
//...do other products.push(_) to add more objects...
   tables : Table[] = [
    {id:1,name:"masa1",companyId:1},
    {id:2,name:"masa2",companyId:1},
    {id:3,name:"masa3",companyId:1},
    {id:4,name:"masa4",companyId:1},
    {id:5,name:"masa5",companyId:1},
    {id:6,name:"masa6",companyId:1}
    ];
  number: number | undefined;
  constructor() {
    
   }

  ngOnInit(): void {
    this.number=this.tables.length;
  }

}
