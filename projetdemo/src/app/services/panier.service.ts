import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Panier } from '../models/Panier.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  
  constructor(private httpclt:HttpClient){

  }
  getAllPaniers():Observable<Panier[]>
  {
    return this.httpclt.get<Panier[]>("http://localhost:3000/Panier/")
  }
  
}
