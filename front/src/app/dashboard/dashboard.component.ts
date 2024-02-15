import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../services/card.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  animations: []

})
export class DashboardComponent {

  cards = [
    { imagePath: 'assets/cards/hearts/king_of_hearts2.png' },
    { imagePath: 'assets/cards/spades/king_of_spades2.png' },
  ];

  displayCardGrid: boolean = false;
  isLoading: boolean = false;


  constructor(private cardService: CardService, private router: Router) {
    
  }

  showCardGrid() {
     
      this.cardService.drawingCard().subscribe(res => {
      // Redirect to the desired route after successful login
      if(res){
        console.log("GIRD !"+JSON.stringify(res));
        for(let item of res ){
          JSON.stringify(item)
         // this.cards.push({item.color, item.value});
        }
          
        
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
