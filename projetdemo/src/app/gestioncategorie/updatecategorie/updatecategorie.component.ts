import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/Categorie.model';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-updatecategorie',
  templateUrl: './updatecategorie.component.html',
  styleUrls: ['./updatecategorie.component.css']
})
export class UpdatecategorieComponent {

  id!:number;
  categorie!:Categorie;
  constructor(private categorieService:CategorieService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.categorie=new Categorie;
    this.id=this.route.snapshot.params['id'];

   this.categorieService.getCategorieById(this.id).subscribe(data =>{
    this.categorie=data;
   }, error => console.log(error));
  }
 
  onSubmit(){
   this.categorieService.updateCategorie(this.id,this.categorie).subscribe(data=>{
    this.goToEquipeList();
 }, error => console.log(error));
  }
  goToEquipeList(){
    this.router.navigate(['/listcategorie'])
  }
}

