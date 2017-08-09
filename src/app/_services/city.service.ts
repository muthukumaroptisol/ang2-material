import { Injectable } from '@angular/core';
import { Http, Request, Response } from '@angular/http';
import { Config } from "./config.service";
import 'rxjs/Rx'; 

@Injectable()
export class CityService {
	url :string;
	constructor (
			private http: Http,
			private config: Config
	) {	}

	getCity() {
		return this.http.get(this.config.apiUrl+'/listCity',this.config.jwt()).map((response: Response) => response.json());		
	}

	getCityCount() {
		return this.http.get(this.config.apiUrl+'/listCity',this.config.jwt()).count( (response: Response) => response.json()); 
	}
	createCity(cityModel) {
		return this.http.post(this.config.apiUrl+'/createCity',cityModel, this.config.jwt()).map((response: Response) => response.json());
	}

	updateCity(cityModel) {
		return this.http.put(this.config.apiUrl+'/updateCity?id='+cityModel.id, cityModel, this.config.jwt()).map((response: Response) => response.json());
	}
}