import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatListModule} from '@angular/material/list';

import { HomeComponent } from './views/home/home.component';
import { GamesCrudComponent } from './views/games-crud/games-crud.component';
import { GamesCreateComponent } from './components/games/games-create/games-create.component';

import {HttpClientModule} from '@angular/common/http'

import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { GamesReadComponent } from './components/games/games-read/games-read.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { GamesUpdateComponent } from './components/games/games-update/games-update.component';
import { LojasCrudComponent } from './views/lojas-crud/lojas-crud.component';
import { LojasCreateComponent } from './components/lojas/lojas-create/lojas-create.component';
import { LojasReadComponent } from './components/lojas/lojas-read/lojas-read.component';
import { LojasUpdateComponent } from './components/lojas/lojas-update/lojas-update.component';
import { CategoriasCrudComponent } from './views/categorias-crud/categorias-crud.component';
import { CategoriasCreateComponent } from './components/categorias/categorias-create/categorias-create.component';
import { CategoriasReadComponent } from './components/categorias/categorias-read/categorias-read.component';
import { CategoriasUpdateComponent } from './components/categorias/categorias-update/categorias-update.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    GamesCrudComponent,
    GamesCreateComponent,
    GamesReadComponent,
    GamesUpdateComponent,
    LojasCrudComponent,
    LojasCreateComponent,
    LojasReadComponent,
    LojasUpdateComponent,
    CategoriasCrudComponent,
    CategoriasCreateComponent,
    CategoriasReadComponent,
    CategoriasUpdateComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
