import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import {DataSource} from '@angular/cdk';
import {Observable} from 'rxjs/Observable';
// import {PeopleDatabase, UserData} from './people-database';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

export interface UserData {
  user_name: string;
  mobile_number: string;  
}

@Injectable()

export class UserService  extends DataSource<any> {
	users;
	private url;
	
	constructor(private http: Http) {
		super();
		// this.url = 'http://45.55.48.150:1347';
		this.url = 'http://139.59.59.214:1337';
	}
	
	connect(): Observable<UserData[]> {
		return this.http.get(this.url+'/category',this.jwt()).map((response: Response) => response.json());
    }

    disconnect() {}

	getUsers() {
		return this.http.get(this.url+'/listUser',this.jwt()).map((response: Response) => response.json());
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