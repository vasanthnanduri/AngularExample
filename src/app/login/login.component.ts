import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent {

  log(x) {
    console.log(x);
    console.log(x.loginId);
    console.log(x.password);
  }

}
