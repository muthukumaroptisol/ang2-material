import { LayoutLeftMenuComponent } from '../layout-left-menu/layout-left-menu.component';
import { Component, OnInit, ViewChild } from '@angular/core';
// import {AuthenticateService} from "../login/loginService/authenticate.service";
import { AuthenticationService } from '../_services/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // providers: [AuthenticateService],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  @ViewChild(LayoutLeftMenuComponent) leftMenu: LayoutLeftMenuComponent;
  constructor(private _service:AuthenticationService) { }

  ngOnInit() {
    this._service.checkCredentials();
    // this.loadProfiles();
  }

  /* for open left menu */
  toggleSidebar() {
    this.leftMenu.start.toggle();
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
