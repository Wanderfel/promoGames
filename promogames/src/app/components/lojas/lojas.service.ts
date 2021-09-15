import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Loja } from './lojas.model';

@Injectable({
  providedIn: 'root'
})
export class LojasService {

  baseUrl = "http://localhost:8080/lojas"
  constructor( private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string):void{
    this.snackBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
    console.log(msg)
  }

  create(loja: Loja): Observable<Loja>{
    return this.http.post<Loja>(this.baseUrl,loja)
  }

  read(): Observable<Loja[]>{
    return this.http.get<Loja[]>(this.baseUrl)
  }

  readByID(id:string | null): Observable<Loja>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Loja>(url)
  }
  
  update(loja: Loja): Observable<Loja>{
    const url = `${this.baseUrl}/${loja.id}`
    return this.http.put<Loja>(url,loja)
  }

  delete(game: Loja): Observable<Loja>{
    const url = `${this.baseUrl}/${game.id}`
    return this.http.delete<Loja>(url)
  }

}

