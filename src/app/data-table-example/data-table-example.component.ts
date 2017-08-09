import { Component, OnInit, ViewChild } from '@angular/core';
import { UserServiceNew } from './user-services';
import { ExampleDataSource, ExampleDatabase } from './database';
import { MdPaginator } from '@angular/material';


@Component({
  selector: 'app-data-table-example',
  templateUrl: './data-table-example.component.html',
  styleUrls: ['./data-table-example.component.css']
})
export class DataTableExampleComponent implements OnInit {
  
  @ViewChild(MdPaginator) paginator: MdPaginator;

  displayedColumns = ['userId', 'userName', 'createdDate', 'Action'];
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;

  constructor(private service: UserServiceNew) {}

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);    
  	this.service.getTableData().subscribe(data => {
    	this.exampleDatabase.loadData(data);        
    });    
  }

}
