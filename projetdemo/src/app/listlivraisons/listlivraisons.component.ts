import { Component, OnInit } from '@angular/core';
import { Livraison } from '../models/Livraison.model';
import { LivraisonService } from '../services/livraison.service';

@Component({
  selector: 'app-listlivraisons',
  templateUrl: './listlivraisons.component.html',
  styleUrls: ['./listlivraisons.component.css']
})
export class ListlivraisonsComponent implements OnInit{

  listlivraisons:Livraison[]=[]
  constructor(private livserv:LivraisonService)
  {

  }
  ngOnInit(): void {
    this.livserv.getAllLivraisons().subscribe(
      (tab)=>(
        this.listlivraisons=tab
      )
    )
  }

}
