import { Panier } from "./Panier.model"
import { Produit } from "./Produit.model"

export class Ligne_panier{
    idlp!:number
    qteAjoute!:number
    prod!:Produit
    panier!:Panier
}