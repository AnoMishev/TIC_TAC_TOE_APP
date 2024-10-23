import { NgModule } from "@angular/core";
import { TicTacToeGame } from "./game.component";
import { TicTacToeRoutingModule } from "./game-routing-module";
import { CommonModule } from "@angular/common";
import { TicTacModalComponent } from "./modal-component/modal.component";
import { CellComponent } from "./cell/cell.component";
import { TicTacService } from "./game.service";



@NgModule({
    declarations: [
      TicTacToeGame,
      TicTacModalComponent,
      CellComponent
      
    ],
    imports: [
      CommonModule,
      TicTacToeRoutingModule
    ],
    providers: [
      TicTacService
    ]
  })
  export class TicTacToeModule {

   }
  