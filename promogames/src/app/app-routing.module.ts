import { CategoriasUpdateComponent } from './components/categorias/categorias-update/categorias-update.component';
import { CategoriasCreateComponent } from './components/categorias/categorias-create/categorias-create.component';
import { CategoriasCrudComponent } from './views/categorias-crud/categorias-crud.component';
import { LojasUpdateComponent } from './components/lojas/lojas-update/lojas-update.component';
import { LojasCreateComponent } from './components/lojas/lojas-create/lojas-create.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {GamesCrudComponent} from './views/games-crud/games-crud.component';
import { LojasCrudComponent } from './views/lojas-crud/lojas-crud.component';
import {GamesCreateComponent} from './components/games/games-create/games-create.component'
import { GamesUpdateComponent } from './components/games/games-update/games-update.component';


const routes: Routes = [{
  path:"",
  component: HomeComponent
},{
  path:"games",
  component:GamesCrudComponent
},
{
  path: "games/create",
  component: GamesCreateComponent
},
{
  path: "games/update/:id",
  component: GamesUpdateComponent
},
{
  path:"lojas",
  component:LojasCrudComponent
},
{
  path:"lojas/create",
  component: LojasCreateComponent
},
{
  path:"lojas/update/:id",
  component:LojasUpdateComponent
},
{
  path:"categorias",
  component: CategoriasCrudComponent
},
{
  path:"categorias/create",
  component: CategoriasCreateComponent
},
{
  path:"categorias/update/:id",
  component: CategoriasUpdateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
