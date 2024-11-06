import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { PlayerComponent } from './player/player.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule, MatDialogModule, DialogComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  game!: Game;
  cardDrawn = false;
  currentCard!: string;

  constructor(private dialog: MatDialogModule) {}

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
      console.log(this.game)

      setTimeout(() =>{
        this.cardDrawn = false;
      }, 1500);
    }
  }

  newGame() {
    this.game = new Game;

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');

    });
  }

}
