import { Component, computed, input } from '@angular/core';

import type { Biblioteca } from '../../models/biblioteca.model';

@Component({
  selector: 'app-libros-tabla',
  templateUrl: './libros-tabla.component.html'
})
export class LibrosTabla {

  readonly bibliotecas = input.required<Biblioteca[]>();

  readonly filas = computed(() =>
    this.bibliotecas().flatMap(b =>
      b.libros.map(l => ({
        id: l.id,
        titulo: l.titulo,
        autor: l.autor,
        anio: l.anioPublicacion,
        biblioteca: b.nombre
      }))
    )
  );
}
