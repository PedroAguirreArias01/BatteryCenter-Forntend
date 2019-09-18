import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  public get(): Observable<Cliente[]> {

    return null;
  }

  public save(): Cliente {

    return null;
  }

}
