import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categorias.model';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-categorias-read',
  templateUrl: './categorias-read.component.html',
  styleUrls: ['./categorias-read.component.css']
})
export class CategoriasReadComponent implements OnInit {
  categorias!: Categoria[]
  displayedColumns = ['id','nome','acao']
  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.categoriasService.read().subscribe( categorias =>{
      this.categorias = categorias;

    })
  }

  alertDelete(categoria: Categoria):void{
    if(window.confirm("Deseja realmente deletar esta Categoria ?")){
      this.categoriasService.delete(categoria).subscribe(()=>{
        this.categoriasService.showMessage("Deletado com sucesso")
        this.ngOnInit()
      })
    }
  }
}
