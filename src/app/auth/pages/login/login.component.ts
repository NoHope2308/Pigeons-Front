import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    email: ['test1@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  });

  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.validateToken()
    .subscribe( res => console.log(res))

    const {email, password} = this.myForm.value;

    this.authService.login( email, password)
    .subscribe( res => {
      console.log(res)
      if ( res === true ) {
        this.router.navigateByUrl('/dashboard');
      } else {
        alert(res)
      }
    })
  }

}
