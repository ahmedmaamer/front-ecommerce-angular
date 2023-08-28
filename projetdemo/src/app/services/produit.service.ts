import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../models/Produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private httpclt:HttpClient){

  }
  getAllprods():Observable<Produit[]>
  {
    return this.httpclt.get<Produit[]>("http://localhost:8080/getallprods")
  }
  getAllprodsByCatid(id:Number):Observable<Produit[]>
  {
    return this.httpclt.get<Produit[]>(`http://localhost:8080/getallprodsbycatid/${id}`)
  }
  deleteProduit(id:number):Observable<Object> {
    return this.httpclt.delete(`http://localhost:8080/deleteprod/${id}`)
  }
  createProduit(prod:Produit,id:number):Observable<Produit>{
    return this.httpclt.post<Produit>(`http://localhost:8080/addproduit/${id}`,prod)
   }
   getProdById(id:number):Observable<Produit>{
    return this.httpclt.get<Produit>(`http://localhost:8080/getproduitbyid/${id}`);
   }
   updateProduit(id:number,prod:Produit):Observable<Object>{
    return this.httpclt.put(`http://localhost:8080/updateproduit/${id}`,prod)
   }

}
