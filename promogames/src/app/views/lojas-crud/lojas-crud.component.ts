import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lojas-crud',
  templateUrl: './lojas-crud.component.html',
  styleUrls: ['./lojas-crud.component.css']
})
export class LojasCrudComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToLojasCreate():void{

    this.router.navigate(['/lojas/create'])
  }
}
