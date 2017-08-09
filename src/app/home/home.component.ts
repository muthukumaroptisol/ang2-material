import { Component, OnInit } from '@angular/core';
// import {AuthenticateService} from "../login/loginService/authenticate.service";
import { AuthenticationService } from '../_services/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // providers: [AuthenticateService],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private _service:AuthenticationService) { }

  ngOnInit() {
    this._service.checkCredentials();
    // this.loadProfiles();
  }

  /*loadProfiles(){
    for (var sd in this.data) {
      var a= this.data[0];
    }
   }*/

  logout():void {
    this._service.logout();
  }
}
