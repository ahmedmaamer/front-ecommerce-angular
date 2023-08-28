import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/models/Produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit{
  id!:number
  produit:Produit= new Produit();
  
  constructor(private prodserv : ProduitService,private route:ActivatedRoute,private router:Router){}
  ngOnInit():void {

  }
  saveProduit(){
    this.id=this.route.snapshot.params['id'];
    this.prodserv.createProduit(this.produit,this.id).subscribe(data =>{
      console.log(data);
      this.goToListProduits();
      },
      error =>console.log(error));
  }

  goToListProduits(){
    this.router.navigate(['/listproduit'])
  }

  onSubmit(){
    console.log(this.produit);
    this.saveProduit();
  };

}

