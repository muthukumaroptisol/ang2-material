import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()

export class AuthenticationService {
	users;
	url: string;
	
	constructor(private http: Http) {
		this.url = "http://45.55.48.150:1347";
	}
	
	checkAuthentication(username: string, password: string) {
		return this.http.post(this.url+'/login', JSON.stringify({email: username,password:password, user_type: 2}))
		.map((response: Response) => response.json());
	}

	logout() {
	    localStorage.removeItem("user");
	    //this._router.navigate(['/login']);
	}

	checkCredentials() {
	   // return localStorage.getItem("currentUserToken"); // return null 
  	}
} 

/* 

.map((response: Response) => {
			let user = response.json();
			console.log(user);
			if(user && user.token) {
				localStorage.setItem('currentUser', JSON.stringify(user));
			} 
		});

getAll() {
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

*/