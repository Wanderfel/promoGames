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

  categoriaSelected!:any
  lojaSelected!:any
  game: Game = {
    id:0,
    nome:'',
    preco:0.0,
    loja:0,
    categoria:0,
    link:'',
  }
  lojas!: Loja[]
  categorias!:Categoria[]

  constructor(private router:Router, private gameService:GamesService, private route:ActivatedRoute, private lojasService:LojasService, private categoriasService:CategoriasService) { }

  ngOnInit(): void {
    this.getLojas()
    this.getCategorias()
    const id = this.route.snapshot.paramMap.get('id')

    this.gameService.readByID(id).subscribe(game=>{
      this.categoriaSelected = game.categoria
      this.lojaSelected = game.loja
      this.game.categoria = this.categoriaSelected.id
      this.game.loja = this.lojaSelected.id
      this.game.id = Number(id)
      this.game.nome = game.nome
      this.game.preco = game.preco
      this.game.link = game.link
   
      
      
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

    })
  }

  getCategorias(){
    this.categoriasService.read().subscribe(categorias=>{
      this.categorias = categorias
    
    })
  }

  cancelGames():void{
    this.router.navigate(['/games'])

  }
}
