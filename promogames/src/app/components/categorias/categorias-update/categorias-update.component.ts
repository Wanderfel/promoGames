import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categorias.model';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-categorias-update',
  templateUrl: './categorias-update.component.html',
  styleUrls: ['./categorias-update.component.css']
})
export class CategoriasUpdateComponent implements OnInit {
  categoria!: Categoria;

  constructor(private router:Router, private categoriasService:CategoriasService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.categoriasService.readByID(id).subscribe(categoria=>{
      this.categoria = categoria
    })
  }

  updateCategorias(): void{
    this.categoriasService.update(this.categoria).subscribe(()=>{
      this.categoriasService.showMessage('Categoria Atualizada !')
      this.router.navigate(['/categorias'])
    })
  }

  cancelCategorias():void{
    this.router.navigate(['/categorias'])

  }

}
