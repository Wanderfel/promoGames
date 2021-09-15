import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Categoria } from './categorias.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  baseUrl = "http://localhost:8080/categorias"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string):void{
    this.snackBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
    console.log(msg)
  }

  create(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(this.baseUrl,categoria)
  }

  read(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.baseUrl)
  }

  readByID(id:string | null): Observable<Categoria>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Categoria>(url)
  }

  update(categoria: Categoria): Observable<Categoria>{
    const url = `${this.baseUrl}/${categoria.id}`
    return this.http.put<Categoria>(url,categoria)
  }

  delete(categoria: Categoria): Observable<Categoria>{
    const url = `${this.baseUrl}/${categoria.id}`
    return this.http.delete<Categoria>(url)
  }
}
