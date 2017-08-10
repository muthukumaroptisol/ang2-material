import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSnackBar } from '@angular/material';
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
  message: string;
  action: string;
  /*public user = new UserComponent('','');
  public errorMsg = '';*/

  constructor(
    private AuthService:AuthenticationService,
    private router: ActivatedRoute,
    private route: Router,
    private _materialSnackBar: MdSnackBar
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
        this.message = 'You have logged successfully';
        this.action = "";  
        localStorage.setItem('currentUserToken', user.token);
        this.route.navigate(['/home']);
      } else {        
        this.message = 'Username and password is wrong';
        this.action = "";        
      }

      this._materialSnackBar.open(this.message, this.action, {
        duration: 6000,
      });
    }, error => {
      console.log(error);
       this.message = 'Username and password is wrong';
      this.action = ""; 
      this._materialSnackBar.open(this.message, this.action, {
        duration: 6000,
      });
    });
  }
}
