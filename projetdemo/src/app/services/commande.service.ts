import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande } from './../models/Commande.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private httpclt:HttpClient){

  }
  getAllCommandes():Observable<Commande[]>
  {
    return this.httpclt.get<Commande[]>("http://localhost:3000/Commande/")
  }
}
