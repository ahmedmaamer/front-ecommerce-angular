import { Categorie } from "./Categorie.model"
import { Image } from "./Image.model"
import { Ligne_panier } from "./Ligne_panier.model"

export class Produit{
    
    prodref!:number
    prodPrix!:number
    prodMarque!:string
    prodDescription!:string
    prodQte!:number
    prodDispo!:string
    taille!:string
    couleur!:string
    categorie!:Categorie
    listpaniers!:Ligne_panier[]
    img!:Image
}