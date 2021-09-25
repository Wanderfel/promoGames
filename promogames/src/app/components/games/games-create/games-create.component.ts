import { CategoriasService } from './../../categorias/categorias.service';
import { Categoria } from './../../categorias/categorias.model';
import { LojasService } from './../../lojas/lojas.service';
import { GamesService } from './../games.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Game } from '../games.model';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { Loja } from '../../lojas/lojas.model';

@Component({
  selector: 'app-games-create',
  templateUrl: './games-create.component.html',
  styleUrls: ['./games-create.component.css']
})
export class GamesCreateComponent implements OnInit {

  game: Game = {
    nome:'',
    preco:0.0,
    loja:'',
    categoria:'',
    link:'',
  }

  lojas!: Loja[]
  categorias!:Categoria[]

  constructor(private gamesService: GamesService, private router: Router, private lojasService:LojasService, private categoriasService:CategoriasService) { }

  ngOnInit(): void {
    this.getLojas()
    this.getCategorias()
  }

  createGames():void{
    console.log("essa é a loja:",this.game.loja)
    this.gamesService.create(this.game).subscribe(()=>{
      this.gamesService.showMessage("Game Cadastrado !")
      this.router.navigate(['/games'])
    })
    

  }

  getLojas(){
    this.lojasService.read().subscribe(lojas=>{
      this.lojas = lojas
      console.log(this.lojas)
    })
  }

  getCategorias(){
    this.categoriasService.read().subscribe(categorias=>{
      this.categorias = categorias
      console.log(this.categorias)
    })
  }

  lojaSelecionada(value: string){

    console.log("passou por aqui:",value)
    this.game.loja=value;
  }

  cancelGames():void{
    this.router.navigate(['/games'])

  }



}
