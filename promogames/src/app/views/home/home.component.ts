import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/components/games/games.model';
import { GamesService } from 'src/app/components/games/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  games!:any;
  categoria!:String;
  loja!:String;
  constructor(private gamesService:GamesService) { }

  ngOnInit(): void {
    this.gamesService.read().subscribe( games =>{
      this.games = games
    })
  }



}
