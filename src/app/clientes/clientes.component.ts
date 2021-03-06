import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {

  public clientes: Cliente[]; 
  
  constructor( public clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.get().subscribe(
      clientes => this.clientes = clientes
    )
  } 

}
