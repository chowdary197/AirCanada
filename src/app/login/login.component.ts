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

    constructor( ) {
    }

    ngOnInit() {
       
        

        // get return url from route parameters or default to '/'
     
    }

    // convenience getter for easy access to form fields
    

    onSubmit() {
alert("login succesful");

      //  this.submitted = true;
       

        // stop here if form is invalid
       // if (this.loginForm.invalid) {
         //   return;
        //}

       // this.loading = true;
        
    }
}
