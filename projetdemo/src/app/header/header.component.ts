import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  
  constructor(private Route:Router,private userserv:UtilisateurService){

  }
  ngOnInit(): void {
    
  }
  isConnected(){
    return this.userserv.isConnected()
  }
  isAdmin(){
    return this.userserv.isAdmin()
  }
  logout(){
    this.userserv.logout()
    this.Route.navigate(['/signin']);
  }
}
