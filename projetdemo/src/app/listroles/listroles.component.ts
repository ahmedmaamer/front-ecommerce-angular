import { Component, OnInit } from '@angular/core';
import { Role } from '../models/Role.model';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-listroles',
  templateUrl: './listroles.component.html',
  styleUrls: ['./listroles.component.css']
})
export class ListrolesComponent implements OnInit{

  listroles:Role[]=[]
  constructor(private rolesserv:RoleService)
  {

  }
  ngOnInit(): void {
    this.rolesserv.getAllroles().subscribe(
      (tab)=>(
        this.listroles=tab
      )
    )
  }
}
