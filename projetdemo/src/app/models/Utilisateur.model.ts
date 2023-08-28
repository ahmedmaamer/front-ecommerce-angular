import { Adresse } from "./Adresse.model"
import { Panier } from "./Panier.model"
import { Role } from "./Role.model"

export class Utilisateur{
    uid!:number
    username!:string
    unom!:string
    uprenom!:string
    email!:string
    utel!:number
    password!:string
    listroles!:Role[]
    p!:Panier
    adresse!:Adresse
}