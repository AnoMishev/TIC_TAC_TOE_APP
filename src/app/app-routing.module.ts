import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicTacToeGame } from './game/game.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/game/game.module').then(m => m.TicTacToeModule
    )
  },
  {
    path: "**",
    redirectTo: ''
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
