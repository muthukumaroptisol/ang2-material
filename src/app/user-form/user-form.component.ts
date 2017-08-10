import { Component, OnInit, Input  } from '@angular/core';
import { UserServiceNew } from '../data-table-example/user-services';
import { MdSnackBar } from '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {

    userModel: any = {};
    message: string;
    action: string;
    headingName: string;
    editMode: boolean;
    buttonName: string;

    constructor(
    	private _service: UserServiceNew, 
    	private _materialSnackBar: MdSnackBar,
		private router: ActivatedRoute,
  		private route: Router
    	) { }

	ngOnInit() {
		this.buttonName = "Save";
		this.headingName = "Add new user";
		this.editMode = false;
		this.router.queryParams.subscribe((params: Params) => {
			let userId = params.id;
			if (typeof userId !== 'undefined') {
				this.getUser(userId);
				this.buttonName = "Update";
				this.headingName = "Update existing user";
				this.editMode = true;
			}			
		});
	}

	createUser() {
		/* Once role modal is integrated below code has to be removed  /*, { queryParams: { test:4444}} */				
		this.userModel.userType = 1;
		this.userModel.roleId = 1;

		if(this.editMode === true) {
			let id = this.userModel.userId;
			delete this.userModel.userId;
			this._service.updateUserData(this.userModel,id)
			.subscribe(data => {
				if(data.status === true) {
					this.message = "User has been updated successfully";
					this.action = "";
					this.route.navigate(['/users']);				
				}
				else {
					this.message = data.message;
					this.action = "";	
				}

				this._materialSnackBar.open(this.message, this.action, {
			      duration: 6000,
			    });					
			})
		} else if(this.editMode === false) {
			this._service.addUserData(this.userModel)
			.subscribe(data => {
				if(data.status === true) {
					this.message = "User has been added successfully";
					this.action = "";
					this.route.navigate(['/users']/*, { queryParams: { test:4444}}*/);				
				}
				else {
					this.message = data.message;
					this.action = "";	
				}

				this._materialSnackBar.open(this.message, this.action, {
			      duration: 6000,
			    });	
				
			})
		}

			
	}	

	getUser(id) {
		this._service.getUser(id)
		.subscribe(data => {
			if(data.status === true) {
				this.userModel = data.data;
				console.log("MMMMMMMMMMMMM");
				console.log(this.userModel);
				console.log("MMMMMMMMMMMMM");				
			}
			else {
				this.message = data.message;
				this.action = "";
				this._materialSnackBar.open(this.message, this.action, {
		      		duration: 6000,
		    	});	
			}			
		})
	}

}
