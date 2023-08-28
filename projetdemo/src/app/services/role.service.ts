import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../models/Role.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpclt:HttpClient){

  }
  getAllroles():Observable<Role[]>
  {
    return this.httpclt.get<Role[]>("http://localhost:3000/Role/")
  }
}
