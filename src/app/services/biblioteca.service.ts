import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import type { Biblioteca, BibliotecaRequest } from '../models/biblioteca.model';

@Injectable({ providedIn: 'root' })
export class BibliotecaService {

  private readonly url = 'http://localhost:8080/bibliotecas';

  private readonly http = inject(HttpClient);

  consultar(): Observable<Biblioteca[]> {
    return this.http.get<Biblioteca[]>(this.url);
  }

  registrar(datos: BibliotecaRequest): Observable<Biblioteca> {
    return this.http.post<Biblioteca>(this.url, datos);
  }
}
