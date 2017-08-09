import { Injectable } from '@angular/core';
import { Http, Request, Response } from '@angular/http';
import { Config } from "./config.service";

@Injectable()
export class StateService {
	url :string;
	constructor (
			private http: Http,
			private config: Config
	) {	}

	getState() {
		return this.http.get(this.config.apiUrl+'/listState',this.config.jwt()).map((response: Response) => response.json());		
	}

	createState(cityModel) {
		return this.http.post(this.config.apiUrl+'/createCity',cityModel, this.config.jwt()).map((response: Response) => response.json());
	}

	updateState(cityModel) {
		return this.http.put(this.config.apiUrl+'/updateCity?id='+cityModel.id, cityModel, this.config.jwt()).map((response: Response) => response.json());
	}
}