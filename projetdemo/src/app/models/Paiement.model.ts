import { Commande } from "./Commande.model"
import { Livraison } from "./Livraison.model"

export class Paiement{
    IdP!:number
    etatP!:string
    DateP!:Date
    commande!:Commande
    livraison!:Livraison
}
