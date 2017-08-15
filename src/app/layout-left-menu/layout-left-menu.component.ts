import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../_services/index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout-left-menu',
  templateUrl: './layout-left-menu.component.html',
  styleUrls: ['./layout-left-menu.component.css']
})
export class LayoutLeftMenuComponent implements OnInit {
  @ViewChild('start') start;
  constructor(
  	private _service:AuthenticationService,
  	 private router: ActivatedRoute,
    private route: Router 
  ) { }

  ngOnInit() {
  }

  logout():void {
    this._service.logout();
    this.route.navigate(['/login']);
  }

}
