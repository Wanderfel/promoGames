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
    loja:0,
    categoria:0,
    link:'',
  }

  lojas!: any
  categorias!:any

  constructor(private gamesService: GamesService, private router: Router, private lojasService:LojasService, private categoriasService:CategoriasService) { }

  ngOnInit(): void {
    this.getLojas()
    this.getCategorias()
  }

  createGames():void{
   
    this.gamesService.create(this.game).subscribe(()=>{
      this.gamesService.showMessage("Game Cadastrado !")
      this.router.navigate(['/games'])
    })
    

  }


  getLojas(){
    this.lojasService.read().subscribe(lojas=>{
      if(lojas.length == 0){
       
        this.gamesService.showMessage("É necessário cadastrar uma loja antes")
        this.router.navigate(['/games'])
      }else{
        this.lojas = lojas

      }
    })
  }

  getCategorias(){
    this.categoriasService.read().subscribe(categorias=>{

      if(categorias.length == 0){
  
        this.gamesService.showMessage("É necessário cadastrar uma categoria antes")
        this.router.navigate(['/games'])
      }else{

        this.categorias = categorias
      }
    })
  }

  

  cancelGames():void{
    this.router.navigate(['/games'])

  }



}
