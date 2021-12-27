import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Table } from '../Model/Table';
import { TableService } from '../Services/table.service';
@Component({
  selector: 'app-component-tables',
  templateUrl: './component-tables.component.html',
  styleUrls: ['./component-tables.component.css']
})
export class ComponentTablesComponent implements OnInit {
  test = "sa"; 
//...do other products.push(_) to add more objects...
   tables : Table[] = [];
  number: number | undefined;
  constructor(private tableServices:TableService) { }

  ngOnInit(): void {
    this.init();
    this.number=this.tables.length;
  }
  init() {
    this.tables=this.tableServices.getAll(1)//defauld
  }
 
}

