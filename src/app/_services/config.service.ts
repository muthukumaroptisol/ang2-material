import { Injectable } from "@angular/core";
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class Config {
	
	apiUrl : string;
	constructor ()  {			
		this.apiUrl = "http://45.55.48.150:1347";
	}	

	jwt() {
		let currentUserToken = localStorage.getItem('currentUserToken');
		console.log(currentUserToken);
		console.log("Current user-->");
		if(currentUserToken) {
			let headers = new Headers({ 'Authorization' : 'Bearer ' + currentUserToken});
			return new RequestOptions({headers: headers });
		}
	}

}