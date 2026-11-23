import { Component, inject, signal } from '@angular/core';

import { BibliotecaForm } from './components/biblioteca-form/biblioteca-form.component';
import { LibrosTabla } from './components/libros-tabla/libros-tabla.component';
import type { Biblioteca } from './models/biblioteca.model';
import { BibliotecaService } from './services/biblioteca.service';

@Component({
  selector: 'app-root',
  imports: [BibliotecaForm, LibrosTabla],
  templateUrl: './app.component.html'
})
export class App {

  private readonly bibliotecaService = inject(BibliotecaService);

  readonly bibliotecas = signal<Biblioteca[]>([]);
  readonly error = signal('');

  constructor() {
    this.cargar();
  }

  cargar(): void {
    this.error.set('');
    this.bibliotecaService.consultar().subscribe({
      next: (datos) => this.bibliotecas.set(datos),
      error: () => this.error.set('No se pudo consultar el backend. Verifique que esté en ejecución en el puerto 8080.')
    });
  }
}
