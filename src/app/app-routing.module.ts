import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExerciseComponent} from './components/exercise/exercise.component';

const routes: Routes = [

  {path: 'exercise', component: ExerciseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
