import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginForm: FormGroup;

    constructor(private router:Router ) {
    }

    ngOnInit() {
    }

    onLogin(loginCredentials, data) {
      if (loginCredentials.username == "kiran" && loginCredentials.password == "kiran" && data == "manager") {
        var response = {
          username: 'kiran',
          role: 'manager',
          userid: 'kiran@gmail.com'
        }
        localStorage.setItem('loginObj',JSON.stringify(response));
        this.router.navigate(['/admin']);
      } else if (loginCredentials.username == "praveen" && loginCredentials.password == "praveen" && data == "user") {
        alert("Logged in successfully")
      } else {
        alert("Please check login credentials");
      }
    }
  
    onRegistration(data) {
  
      if (data.password == data.ConfirmPassword) {
        console.log(data);
  
        var dataObj = {
          username: data.username,
          password: data.password,
          userid: data.userid,
          EmailId: data.EmailId,
          PhoneNo: data.PhoneNo,
          role: "User",
          AYN: "Y",
          cdate: new Date().getTime()
        }
      } else {
        alert("Password and Confirm Password doesn't match")
      }
    }
}
