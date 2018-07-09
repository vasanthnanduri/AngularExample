import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  log(x) {
    console.log(x);
    console.log(x.loginId);
    console.log(x.password);
  }
}
