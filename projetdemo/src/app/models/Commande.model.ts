import { Paiement } from "./Paiement.model"
import { Panier } from "./Panier.model"

export class Commande{
    CmdId!:number
    CmdDate!:Date
    MontantTotal!:number
    etatCmd!:string
    pan!:Panier
    paiement!:Paiement
}