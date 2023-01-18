import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['Test 4', [Validators.required]],
    email: ['test4@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
    phone: ['1234567', [Validators.required, Validators.minLength(6)]]
  });
  
  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  register() {

    const { name, email, password, phone } = this.myForm.value;
    this.authService.register( name, email, password, phone )
    .subscribe( res => {
      if ( res === true ) {
        this.router.navigateByUrl('/dashboard');
      } else {
        alert(res)
      }
    }
  );
  }
}
