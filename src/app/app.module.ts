import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpgetComponent } from './httpget/httpget.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'httpGit', component: HttpgetComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HttpgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
