import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurService } from '../services/utilisateur.service';
import { Panier } from '../models/Panier.model';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit{
  forminput!:FormGroup
  constructor(private fb:FormBuilder,private route:Router,private userserv:UtilisateurService) {
  }
  ngOnInit(): void {
    this.forminput=this.fb.group(
      {"username":["",[Validators.required]],
      "password":["",Validators.required]

    })
  }
  onsubmit(){
    if(this.forminput.valid){
      this.userserv.connect(this.forminput.controls["username"].value,this.forminput.controls["password"].value).subscribe(
        (authResult)=>{
         this.userserv.saveuser(authResult.jwt,authResult.username,authResult.id,authResult.roles) 
         if(authResult.roles.includes("ADMINISTRATEUR")){
          this.route.navigate(["/listusers"])
         }
         else{this.route.navigate(["/headerclt"])}
      });
           
         }

        }
 
     
    }
  

