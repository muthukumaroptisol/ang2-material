import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule, MdTableModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule }   from '@angular/router';
import { CdkTableModule } from '@angular/cdk';

// import { MdTableModule } from '@angular/material'


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { AuthenticationService, UserService/*, CityService, Config, StateService*/ } from './_services/index';
import {UserServiceNew} from './data-table-example/user-services';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DataTableExampleComponent } from './data-table-example/data-table-example.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    HomeComponent,
    LeftMenuComponent,
    DashboardComponent,
    ToolbarComponent,
    DataTableExampleComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MdTableModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: 'login', component:LoginComponent },
      { path: 'home', component: HomeComponent },
       { path: 'user', component: UserComponent},
      { path: 'addUser', component: UserFormComponent},
      { path: 'users', component: DataTableExampleComponent},
      { path: '', component: LoginComponent },
      // { path: '**', component: LoginComponent },

    ])
  ],
  providers: [
    AuthenticationService,
    UserServiceNew
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }