import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/Categorie.model';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-addcategorie',
  templateUrl: './addcategorie.component.html',
  styleUrls: ['./addcategorie.component.css']
})
export class AddcategorieComponent implements OnInit{

    categorie: Categorie = new Categorie();
    categorieForm!: FormGroup;
  
    constructor(
      private categorieservice: CategorieService,
      private router: Router,
      private fb: FormBuilder
    ){}
  
    ngOnInit(): void {
      this.categorieForm = this.fb.group({
      
        catlib: ['']
        
      });
    }

  
    saveCategorie() {
      this.categorieservice.createCategorie(this.categorieForm.value).subscribe(
        (data) => {
          console.log(data);
          this.goToCategorie();
        },
        (error) => console.log(error)
      );
    }
  
    goToCategorie() {
      this.router.navigate(['/listcategorie']);
    }
  
    onSubmit() {
      console.log(this.categorieForm.value);
      this.saveCategorie();
    }
  }

