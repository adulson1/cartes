import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatCardModule,} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

   credentials = { username: "", password: "" };
   username: string = '';
   password: string = '';
   loginForm: FormGroup;
   isLoading: boolean = false;
  
  constructor(private authService: AuthServiceService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      console.log("===== LOGIN ======"+JSON.stringify(this.loginForm.value));
      this.credentials = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      };
    this.authService.login(this.credentials).subscribe(res => {
      // Redirect to the desired route after successful login
      if(res){
        console.log("SUCCESS !"+JSON.stringify(res.users));
        this.router.navigate(['/dashboard']);
      }else{
        console.log("ERR1!");

      }
    }, error => {
      // Handle login error
      console.log("ERR!");
    });
      this.isLoading = true;
      // Simulate login process with a delay
      setTimeout(() => {
        // Perform actual login logic here
        this.isLoading = false;
      }, 2000);
    }
  }
  /*login() {
    console.log("===== LOGIN ======");
    this.authService.login(this.credentials).subscribe(res => {
      // Redirect to the desired route after successful login
      if(res){
        console.log("SUCCESS !"+res.users);
        this.router.navigate(['/dashboard']);
      }else{
        console.log("ERR1!");

      }
    }, error => {
      // Handle login error
      console.log("ERR!");
    });
  }

  login1(): void {
    console.log("===== LOGIN ======");
    this.authService.login1(this.username, this.password)
      .subscribe(
        response => {
          // Handle successful login response
          console.log('Login successful');
        },
        error => {
          // Handle login error
          console.error('Login failed:', error);
        }
      );
  }*/
}
