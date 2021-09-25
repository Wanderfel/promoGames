import { LojasService } from './../../lojas/lojas.service';
import { Game } from './../games.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Loja } from '../../lojas/lojas.model';
import { CategoriasService } from '../../categorias/categorias.service';
import { Categoria } from '../../categorias/categorias.model';

@Component({
  selector: 'app-games-update',
  templateUrl: './games-update.component.html',
  styleUrls: ['./games-update.component.css']
})
export class GamesUpdateComponent implements OnInit {

  game!: Game;
  lojas!: Loja[]
  categorias!:Categoria[]

  constructor(private router:Router, private gameService:GamesService, private route:ActivatedRoute, private lojasService:LojasService, private categoriasService:CategoriasService) { }

  ngOnInit(): void {
    this.getLojas()
    this.getCategorias()
    const id = this.route.snapshot.paramMap.get('id')
    this.gameService.readByID(id).subscribe(game=>{
      this.game = game
    })
  }

  updateGames(): void{
    this.gameService.update(this.game).subscribe(()=>{
      this.gameService.showMessage('Game Atualizado !')
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

  cancelGames():void{
    this.router.navigate(['/games'])

  }
}
