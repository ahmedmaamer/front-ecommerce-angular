import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../models/Categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

 
  constructor(private httpclt:HttpClient){

  }
  getAllCategorie():Observable<Categorie[]>
  {
    return this.httpclt.get<Categorie[]>("http://localhost:8080/getcategorie")
  }
  deleteCategorie(id:number):Observable<Object> {
    return this.httpclt.delete(`http://localhost:8080/deletecategorie/${id}`)
  }
  createCategorie(categorie:Categorie):Observable<Object>{
    return this.httpclt.post(`http://localhost:8080/addcategorie`,categorie)
  }
   getCategorieById(id:number):Observable<Categorie>{
    return this.httpclt.get<Categorie>(`http://localhost:8080/getcategorie/${id}`);
   }
   updateCategorie(id:number,categorie:Categorie):Observable<Object>{
    return this.httpclt.put(`http://localhost:8080/updatecategorie/${id}`,categorie)
   }
}
