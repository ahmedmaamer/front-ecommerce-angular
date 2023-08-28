import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/models/Produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-updateproduit',
  templateUrl: './updateproduit.component.html',
  styleUrls: ['./updateproduit.component.css']
})
export class UpdateproduitComponent implements OnInit{

  id!:number;
  produit!:Produit;
  constructor(private prodService:ProduitService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.produit=new Produit;
    this.id=this.route.snapshot.params['id'];

   this.prodService.getProdById(this.id).subscribe(data =>{
    this.produit=data;
   }, error => console.log(error));
  }
 
  onSubmit(){
   this.prodService.updateProduit(this.id,this.produit).subscribe(data=>{
    this.goToProduitList();
 }, error => console.log(error));
  }
  
  goToProduitList(){
    this.router.navigate(['/listproduit'])
  }
}
