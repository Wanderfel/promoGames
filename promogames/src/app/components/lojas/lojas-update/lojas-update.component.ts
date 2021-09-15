import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loja } from '../lojas.model';
import { LojasService } from '../lojas.service';

@Component({
  selector: 'app-lojas-update',
  templateUrl: './lojas-update.component.html',
  styleUrls: ['./lojas-update.component.css']
})
export class LojasUpdateComponent implements OnInit {
  loja!: Loja;
  constructor(private router:Router, private lojasService:LojasService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.lojasService.readByID(id).subscribe(loja=>{
      this.loja = loja
    })
  }

  updateLojas(): void{
    this.lojasService.update(this.loja).subscribe(()=>{
      this.lojasService.showMessage('Game Atualizado !')
      this.router.navigate(['/lojas'])
    })
  }

  cancelLojas():void{
    this.router.navigate(['/lojas'])

  }

}
