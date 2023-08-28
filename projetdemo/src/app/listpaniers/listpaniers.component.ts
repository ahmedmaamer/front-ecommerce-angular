import { Component, OnInit } from '@angular/core';
import { Panier } from '../models/Panier.model';
import { PanierService } from './../services/panier.service';

@Component({
  selector: 'app-listpaniers',
  templateUrl: './listpaniers.component.html',
  styleUrls: ['./listpaniers.component.css']
})
export class ListpaniersComponent implements OnInit{

  listpaniers:Panier[]=[]
  constructor(private panserv:PanierService)
  {

  }
  ngOnInit(): void {
    this.panserv.getAllPaniers().subscribe(
      (tab)=>(
        this.listpaniers=tab
      )
    )
  }

}
