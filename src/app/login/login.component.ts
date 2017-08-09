import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { AuthenticateService } from "./loginService/authenticate.service";
/*import { UserComponent } from "../user/user.component";*/
import { AuthenticationService } from '../_services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers : [AuthenticateService]
})
export class LoginComponent implements OnInit {
  loginModel: any = {};
  returnUrl: string;

  /*public user = new UserComponent('','');
  public errorMsg = '';*/

  constructor(
    private AuthService:AuthenticationService,
    private router: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit() { }

 /* login() {
    if(!this._service.login(this.user)) {
      this.errorMsg = 'Failed to login! try again ...';
    }
  }*/

  login() {
    this.AuthService.checkAuthentication(this.loginModel.username,this.loginModel.password)
    .subscribe(user => {
      if(user && user.token) {
          localStorage.setItem('currentUserToken', user.token);
          this.route.navigate(['/home']);
          //this.route.navigate(['/home']/*, { queryParams: { test:4444}}*/);
      } else {
        console.log('Username and password is wrong');
      }

    }, error => {
      console.log(error);
    });
  }
}
