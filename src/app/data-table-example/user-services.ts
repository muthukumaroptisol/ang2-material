import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserServiceNew {

  constructor(private http: Http) {}

 getTableData() {
    return this.http
      .get('http://139.59.59.214:1337/category')
      .map(x => x.json());
  }
}
