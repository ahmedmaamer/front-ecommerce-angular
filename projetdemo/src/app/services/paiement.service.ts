import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paiement } from '../models/Paiement.model';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {
  
  constructor(private httpclt:HttpClient){

  }
  getAllPaiements():Observable<Paiement[]>
  {
    return this.httpclt.get<Paiement[]>("http://localhost:3000/Paiement/")
  }
}
