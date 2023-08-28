import { Utilisateur } from "./Utilisateur.model"

export class Adresse{
    idAdr!:number
    rue!:string
    ville!:string
    pays!:string
    codePostal!:number
    listusers!:Utilisateur[]
}