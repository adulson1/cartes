import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

   credentials = { username: "", password: "" };
   username: string = '';
   password: string = '';

  
  constructor(private authService: AuthServiceService, private router: Router) {}

  login() {
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
  }
}
