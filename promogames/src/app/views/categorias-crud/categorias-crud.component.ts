import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias-crud',
  templateUrl: './categorias-crud.component.html',
  styleUrls: ['./categorias-crud.component.css']
})
export class CategoriasCrudComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToCategoriasCreate():void{
    console.log("passou")
    this.router.navigate(['/categorias/create'])
  }

}
