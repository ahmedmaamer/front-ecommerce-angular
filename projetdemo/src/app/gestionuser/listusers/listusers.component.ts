import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../models/Utilisateur.model';
import { UtilisateurService } from '../../services/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit{

  listusr:Utilisateur[]=[]
  constructor(private userserv:UtilisateurService,private route:Router){

  }
  ngOnInit(): void {
    this.userserv.getAllUsers().subscribe(
      (tab)=>(
        this.listusr=tab
      )
    )
  }
  deleteUser(id:number){
    this.userserv.deleteUser(id).subscribe(data => {
      this.userserv.getAllUsers();
    })
    location.reload();
    }
  
    updateUser(id:number){
      this.route.navigate(['/updateuser',id])
    }
}
