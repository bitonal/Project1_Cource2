import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login=new Login();
  logins!: Login[];
  constructor(private route:Router,private loginservice:LoginService) { }

  ngOnInit(): void {
    this.logins=this.loginservice.getUsers();
  }
  save(LoginForm:NgForm)
  {
   let uid=this.login.email;
   let pass=this.login.password;
   if(uid=="maltego@gmail.com")
   {
     if(pass=="varshini1234"){
       this.route.navigate(['./admin']);
     }
     else{
       alert('Admin password incorrect');
     }
   }
  }
}
