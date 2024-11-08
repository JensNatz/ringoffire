import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { PlayerComponent } from './player/player.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { InstructionCardComponent } from './instruction-card/instruction-card.component';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule, 
    PlayerComponent, 
    MatButtonModule,
    MatIconModule,
    DialogComponent,
    InstructionCardComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  game!: Game;
  cardDrawn = false;
  currentCard!: string;
  readonly dialog = inject(MatDialog);


  ngOnInit(): void {
    this.newGame();
  }

  drawCard() {
    if (!this.cardDrawn) {
      let drawnCard = this.game.stack.pop();
      if (drawnCard != undefined) {
        this.currentCard = drawnCard;
        this.cardDrawn = true;
        this.game.playedCards.push(this.currentCard);
      }
      this.setNextPlayer();
      console.log(this.game);

      setTimeout(() =>{
        this.cardDrawn = false;
      }, 1500);
    }
  }

  setNextPlayer (){
    if(this.game.currentPlayer == this.game.players.length-1){
      this.game.currentPlayer = 0;
    } else {
      this.game.currentPlayer++;
    }
    
  }

  newGame() {
    this.game = new Game;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(name => {
      console.log('The dialog was closed:', name);
      this.addPlayer(name);
    });
  }

  addPlayer(playername: string){
    this.game.players.push(playername);
  }

}
