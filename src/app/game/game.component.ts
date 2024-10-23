import { Component, inject } from '@angular/core';
import { TicTacService } from './game.service';


@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class TicTacToeGame {
  public service = inject(TicTacService)

  public makeMove(row: number, col: number) {
    this.service.makeMove(row, col) // od kade se row i col ?
  }

  public restartGame() {
    this.service.restartGame()
  }
}
