import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'scoreBoard',
    pathMatch: 'full'
  },
  {
    path: 'scoreBoard',
    loadChildren: './score-board/score-board.module#ScoreBoardModule'
  }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
