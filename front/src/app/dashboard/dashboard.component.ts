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
  cardPath : string = "assets/cards/";
  cards = [
    { imagePath:'assets/cards/hearts/redjoker.png'},
  ];

  displayCardGrid: boolean = false;
  isLoading: boolean = false;


  constructor(private cardService: CardService, private router: Router) {
    
  }

  showCardGrid() {
     
      this.cardService.drawingCard().subscribe(res => {
      // Redirect to the desired route after successful login
      if(res){
        while(this.cards.length>0 ){
          //console.log(this.cards.length+" == POP == ");//+this.cards.pop());
          this.cards.splice(this.cards.length-1, 1);
        }          
        //console.log("GIRD !"+JSON.stringify(res));
        for(let item of res ){
          console.log(this.cardPath+item.color+'/'+item.valueCarte+'.png');
          this.cards.push({imagePath: this.cardPath+item.color+'/'+item.valueCarte+'.png' });
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

  sortCardGrid(){
    console.log("CARD 1 "+JSON.stringify(this.cards));
    this.cards.sort((a, b) => a.imagePath.localeCompare(b.imagePath));
    console.log("CARD 2 "+JSON.stringify(this.cards));
  }
}
