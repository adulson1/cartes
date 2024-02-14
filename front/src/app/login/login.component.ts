import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

   credentials = { username: "", password: "" }

  
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
}
