import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }


  onRegistration(data){

    if(data.password==data.ConfirmPassword){    
   console.log(data);
   
   var dataObj={
    username:data.username,
    password:data.password,
    userid:data.userid,
    EmailId:data.EmailId,
    PhoneNo:data.PhoneNo,
    role:"User",
    AYN:"Y",
    cdate:new Date().getTime()
   }
  }else{
    alert("Password and Confirm Password doesn't match")
  }
  }
}
