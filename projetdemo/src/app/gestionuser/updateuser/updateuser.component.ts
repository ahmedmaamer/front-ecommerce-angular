import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/Utilisateur.model';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit{

  id!:number;
  user!:Utilisateur;
  constructor(private userserv:UtilisateurService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.user=new Utilisateur;
    this.id=this.route.snapshot.params['id'];

   this.userserv.getUserById(this.id).subscribe(data =>{
    this.user=data;
   }, error => console.log(error));
  }
 
  onSubmit(){
   this.userserv.updateUser(this.id,this.user).subscribe(data=>{
    this.goToUserList();
 }, error => console.log(error));
  }
  
  goToUserList(){
    this.router.navigate(['/listusers'])
  }

}
