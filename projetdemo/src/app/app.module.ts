import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SinginComponent } from './singin/singin.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ListusersComponent } from './gestionuser/listusers/listusers.component';
import { ListrolesComponent } from './listroles/listroles.component';
import { ListpaniersComponent } from './listpaniers/listpaniers.component';
import { ListcommandesComponent } from './listcommandes/listcommandes.component';
import { ListadressesComponent } from './listadresses/listadresses.component';
import { ListlivraisonsComponent } from './listlivraisons/listlivraisons.component';
import { ListpaiementsComponent } from './listpaiements/listpaiements.component';
import { AddcategorieComponent } from './gestioncategorie/addcategorie/addcategorie.component';
import { ListcategorieComponent } from './gestioncategorie/listcategorie/listcategorie.component';
import { UpdatecategorieComponent } from './gestioncategorie/updatecategorie/updatecategorie.component';
import { AddproduitComponent } from './gestionproduit/addproduit/addproduit.component';
import { UpdateproduitComponent } from './gestionproduit/updateproduit/updateproduit.component';
import { ListproduitComponent } from './gestionproduit/listproduit/listproduit.component';
import { AddimageComponent } from './gestionproduit/addimage/addimage.component';
import { HeadercltComponent } from './headerclt/headerclt.component';
import { ListproduitcategorieComponent } from './listproduitcategorie/listproduitcategorie.component';
import { PanierComponent } from './panier/panier.component';
import { UpdateuserComponent } from './gestionuser/updateuser/updateuser.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SinginComponent,
    SignupComponent,
    ListusersComponent,
    ListrolesComponent,
    ListpaniersComponent,
    ListcommandesComponent,
    ListadressesComponent,
    ListlivraisonsComponent,
    ListpaiementsComponent,
    AddcategorieComponent,
    ListcategorieComponent,
    UpdatecategorieComponent,
    AddproduitComponent,
    UpdateproduitComponent,
    ListproduitComponent,
    AddimageComponent,
    HeadercltComponent,
    ListproduitcategorieComponent,
    PanierComponent,
    UpdateuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
