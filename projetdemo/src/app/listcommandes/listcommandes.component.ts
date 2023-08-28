import { Component, OnInit } from '@angular/core';
import { Commande } from '../models/Commande.model';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-listcommandes',
  templateUrl: './listcommandes.component.html',
  styleUrls: ['./listcommandes.component.css']
})
export class ListcommandesComponent implements OnInit{

  listcommandes:Commande[]=[]
  constructor(private commandeserv:CommandeService)
  {

  }
  ngOnInit(): void {
    this.commandeserv.getAllCommandes().subscribe(
      (tab)=>(
        this.listcommandes=tab
      )
    )
  }
}
