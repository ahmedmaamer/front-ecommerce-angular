import { Commande } from "./Commande.model"
import { Ligne_panier } from "./Ligne_panier.model"
import { Utilisateur } from "./Utilisateur.model"

export class Panier{

    idpanier!:number
    MontantTot!:number
    user!:Utilisateur
    listcommandes!:Commande[]
    listprods!:Ligne_panier[]
}