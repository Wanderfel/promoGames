import { Component, OnInit } from '@angular/core';
import { Loja } from '../lojas.model';
import { LojasService } from '../lojas.service';

@Component({
  selector: 'app-lojas-read',
  templateUrl: './lojas-read.component.html',
  styleUrls: ['./lojas-read.component.css']
})
export class LojasReadComponent implements OnInit {

  lojas!: Loja[]
  displayedColumns = ['id','nome','acao']
  constructor(private lojasService: LojasService) { }

  ngOnInit(): void {
    this.lojasService.read().subscribe( lojas =>{
      this.lojas = lojas;

    })
  }

  alertDelete(loja: Loja):void{
    if(window.confirm("Deseja realmente deletar esta Loja ?")){
      this.lojasService.delete(loja).subscribe(()=>{
        this.lojasService.showMessage("Deletado com sucesso")
        this.ngOnInit()
      })
    }
  }
  
  



}


