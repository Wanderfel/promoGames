import { Router } from '@angular/router';
import { LojasService } from './../lojas.service';
import { Component, OnInit } from '@angular/core';
import { Loja } from '../lojas.model';

@Component({
  selector: 'app-lojas-create',
  templateUrl: './lojas-create.component.html',
  styleUrls: ['./lojas-create.component.css']
})
export class LojasCreateComponent implements OnInit {
  loja: Loja = {
    nome:'',
  }

  constructor( private lojasService: LojasService, private router: Router) { }

  ngOnInit(): void {
  }

  createLojas():void{
    this.lojasService.create(this.loja).subscribe(()=>{
      this.lojasService.showMessage("Loja Cadastrada !")
      this.router.navigate(['/lojas'])
    })
  }

  cancelLojas():void{
    this.router.navigate(['/lojas'])

  }

}
