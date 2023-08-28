import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adresse } from '../models/Adresse.model';

@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  constructor(private httpclt:HttpClient){

  }
  getAllAdresses():Observable<Adresse[]>
  {
    return this.httpclt.get<Adresse[]>("http://localhost:3000/Adresse/")
  }
}
