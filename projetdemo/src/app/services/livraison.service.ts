import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livraison } from '../models/Livraison.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  constructor(private httpclt:HttpClient){

  }
  getAllLivraisons():Observable<Livraison[]>
  {
    return this.httpclt.get<Livraison[]>("http://localhost:3000/Livraison/")
  }
}
