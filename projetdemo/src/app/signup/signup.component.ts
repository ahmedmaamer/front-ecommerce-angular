import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/Utilisateur.model';
import { UtilisateurService } from '../services/utilisateur.service';
import { Panier } from '../models/Panier.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  panier!:Panier

  forminput!:FormGroup
  constructor(private fb:FormBuilder,private route:Router,private userserv:UtilisateurService){

    this.panier = new Panier()

  }
    
  
  ngOnInit(): void {
    this.forminput=this.fb.group(
      { "email":["",Validators.required],
        "username":["",Validators.required],
        "unom":["",Validators.required],
        "uprenom":["",Validators.required],
        "utel":["",Validators.required],
        "password":["",Validators.required]

    })
  }

  register(){
    let usr = new Utilisateur()

    usr.email= this.forminput.controls['email'].value
    usr.username= this.forminput.controls['username'].value
    usr.unom= this.forminput.controls['unom'].value
    usr.uprenom= this.forminput.controls['uprenom'].value
    usr.utel= this.forminput.controls['utel'].value
    usr.password= this.forminput.controls['password'].value   
   
    this.userserv.signup(usr).subscribe(
      (us) => {
        console.log(us);
      },
      (error) => console.log(error)
    )

   if(this.forminput.valid){
      this.route.navigate(["/signin"])
    }
  }
}
