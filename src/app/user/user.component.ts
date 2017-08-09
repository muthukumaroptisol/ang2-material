import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService, UserService } from '../_services/index';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
	
	users;
	displayedColumns = ['user_name', 'mobile_number'];
	dataSource: any;

	constructor(
		private AuthenticationService:AuthenticationService,
		private UserService:UserService
	) { }

	ngOnInit() {
		this.AuthenticationService.checkCredentials();
		this.loadUsers();
		/*this.dataSource = [{
			"user_name" : "muthu",
			"mobile_number" : "9677288489"
		}]  */	
	}
	connect() {
		this.UserService.connect().subscribe(data => {  this.dataSource = data; console.log(this.dataSource);});
	}
	private loadUsers() {
		this.UserService.connect().subscribe(data => {  this.dataSource = data; console.log(this.dataSource);});
	}
}