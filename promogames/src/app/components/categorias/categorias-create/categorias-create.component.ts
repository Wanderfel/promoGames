import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../categorias.model';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-categorias-create',
  templateUrl: './categorias-create.component.html',
  styleUrls: ['./categorias-create.component.css']
})
export class CategoriasCreateComponent implements OnInit {

  categoria: Categoria = {
    nome:'',
  }
  constructor(private categoriasService: CategoriasService, private router: Router) { }

  ngOnInit(): void {
  }

  createCategorias():void{
    this.categoriasService.create(this.categoria).subscribe(()=>{
      this.categoriasService.showMessage("Categoria Cadastrada !")
      this.router.navigate(['/categorias'])
    })
  }

  cancelCategorias():void{
    this.router.navigate(['/categorias'])

  }

}
