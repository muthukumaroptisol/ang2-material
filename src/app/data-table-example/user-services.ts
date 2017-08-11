import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


@Injectable()
export class UserServiceNew {

  constructor(private http: Http) {}

 getUserData() {
    return this.http
      .get('http://localhost:4040/api/users', this.jwt())
      .map(x => x.json());
  }

  getUser(id) {
     return this.http
      .get('http://localhost:4040/api/users/'+id, this.jwt())
      .map(x => x.json());
  }

  addUserData(userModel) {
  	return this.http
  		.post('http://localhost:4040/api/users',userModel, this.jwt())
  		.map((response: Response) => response.json());
  }

  updateUserData(userModel,id) {
    return this.http
      .put('http://localhost:4040/api/users/'+id,userModel, this.jwt())
      .map((response: Response) => response.json());
  }

  deleteUserData(id) {
    return this.http
      .delete('http://localhost:4040/api/users/'+id, this.jwt())
      .map(res => res.json())
      .mergeMap(item => this.getUserData());
  }

  private jwt() {
		let currentUserToken = localStorage.getItem('currentUserToken');
		console.log(currentUserToken);
		console.log("Current user-->");
		if(currentUserToken) {
			let headers = new Headers({ 'Authorization' : 'Bearer ' + currentUserToken});
			return new RequestOptions({headers: headers });
		}
	}

}
