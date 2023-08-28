import { Paiement } from "./Paiement.model"

export class Livraison{
    idL!:number
    etatLiv!:string
    fraisLiv!:number
    delaisLiv!:string
    paiement!:Paiement
}