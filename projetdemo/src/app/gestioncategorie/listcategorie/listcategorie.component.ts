import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categorie } from 'src/app/models/Categorie.model';
import { Produit } from 'src/app/models/Produit.model';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-listcategorie',
  templateUrl: './listcategorie.component.html',
  styleUrls: ['./listcategorie.component.css']
})
export class ListcategorieComponent implements OnInit {

  listproduits:Produit[]=[]
  categories:Categorie[]=[]
  constructor(private categorieService:CategorieService,private route:Router){
    
  }
  ngOnInit(): void {
     this.getCategorie();
  }

  private getCategorie(){
    this.categorieService.getAllCategorie().subscribe(data => {
      this.categories = data
    });
   }
  
  deleteCategorie(catid:number){
  this.categorieService.deleteCategorie(catid).subscribe(data => {
    console.log(data);
    this.getCategorie();
  })
  location.reload();
  }

  updateCategorie(id:number){
    this.route.navigate(['/updatecategorie',id])
  }

  goToAddCategorie(){
    this.route.navigate(['/addcategorie'])
  }

  addProductToCategorie(id:number){
    this.route.navigate(['/addproduit',id])
  }
}

