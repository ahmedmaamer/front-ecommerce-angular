import { Component, OnInit } from '@angular/core';
import { Adresse } from '../models/Adresse.model';
import { AdresseService } from '../services/adresse.service';

@Component({
  selector: 'app-listadresses',
  templateUrl: './listadresses.component.html',
  styleUrls: ['./listadresses.component.css']
})
export class ListadressesComponent implements OnInit{

  listadresses:Adresse[]=[]
  constructor(private adrserv:AdresseService)
  {

  }
  ngOnInit(): void {
    this.adrserv.getAllAdresses().subscribe(
      (tab)=>(
        this.listadresses=tab
      )
    )
  }
}
