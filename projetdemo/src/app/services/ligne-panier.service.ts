import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ligne_panier } from '../models/Ligne_panier.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LignePanierService {

  constructor(private httpclt:HttpClient) {
    

   }
   addProduitToLignePanier(idUser:number,idProduct:number,quantity:number):Observable<Ligne_panier>{
    return this.httpclt.post<Ligne_panier>(`http://localhost:8080/ajouterProduitAuPanier/${idUser}/${idProduct}/${quantity}`,{} )
  }

}
