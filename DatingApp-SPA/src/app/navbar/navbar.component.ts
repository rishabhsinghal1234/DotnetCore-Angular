import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login = () => {
    console.log(this.model);
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in ');
    }, err => {
      console.log('Error ');
    });
  }

  loggedIn = () => {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout = () => {
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
