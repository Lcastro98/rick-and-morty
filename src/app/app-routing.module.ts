import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/main/layout/layout.component';
import { CharactersComponent } from './components/characters/characters.component';
import { RickandmortyComponent } from './components/rickandmorty/rickandmorty.component';

const routes: Routes = [
  {
    path : '',
    component : LayoutComponent
  },
  {
    path : 'characters',
    component : CharactersComponent
  },
  {
    path : 'rickandmorty',
    component : RickandmortyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
