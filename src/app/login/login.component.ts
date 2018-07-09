import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  loginSubmit(e) {
    console.log('login submit method is called');
    const loginId = e.target.element[0].value();
    console.log(loginId);
    return false;
  }

}
