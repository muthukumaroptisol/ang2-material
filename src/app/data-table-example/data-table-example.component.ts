import { Component, OnInit, ViewChild } from '@angular/core';
import { UserServiceNew } from './user-services';
import { ExampleDataSource, ExampleDatabase } from './database';
import { MdPaginator, MdDialog, MdDialogRef,MdSnackBar } from '@angular/material';




@Component({
  selector: 'app-data-table-example',
  templateUrl: './data-table-example.component.html',
  styleUrls: ['./data-table-example.component.css']
})

export class DataTableExampleComponent implements OnInit {
  
  @ViewChild(MdPaginator) paginator: MdPaginator;

  displayedColumns = ['userId', 'firstName', 'lastName', 'email', 'Action'];
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;
  message: string;
  action: string;

  constructor(
    private service: UserServiceNew,
    private dialog: MdDialog,
    private _materialSnackBar: MdSnackBar,
   ) {}

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);    
  	this.service.getUserData().subscribe(userResponse => {
      this.exampleDatabase.loadData(userResponse.data);        
    });    
  }
  /* for delete */
  openDialog(id) {
    let dialogRef = this.dialog.open(DialogDeleteConfirmation);
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'Yes') {
        this.service.deleteUserData(id).subscribe(updatedStatus => {
            this.exampleDatabase.loadData(updatedStatus.data);
            console.log(updatedStatus);
            this.message = "User has been deleted";
            this.action = "";
            this._materialSnackBar.open(this.message, this.action, {
              duration: 6000,
            });
        });        
      }
    });
  }
}

/* This one for open the diagalog to delte or cancel */
@Component({
  selector: 'DialogDeleteConfirmation',
  templateUrl: 'dialog-delete-confirmation.html',
})
export class DialogDeleteConfirmation {
  constructor(public dialogRef: MdDialogRef<DialogDeleteConfirmation>) {}
}
