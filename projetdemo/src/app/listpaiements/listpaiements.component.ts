import { Component, OnInit } from '@angular/core';
import { Paiement } from '../models/Paiement.model';
import { PaiementService } from '../services/paiement.service';

@Component({
  selector: 'app-listpaiements',
  templateUrl: './listpaiements.component.html',
  styleUrls: ['./listpaiements.component.css']
})
export class ListpaiementsComponent implements OnInit{

  listpaiements:Paiement[]=[]
  constructor(private paiementserv:PaiementService)
  {

  }
  ngOnInit(): void {
    this.paiementserv.getAllPaiements().subscribe(
      (tab)=>(
        this.listpaiements=tab
      )
    )
  }
}
