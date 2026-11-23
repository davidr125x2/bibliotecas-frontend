import { Component, inject, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs';

import { BibliotecaService } from '../../services/biblioteca.service';

@Component({
  selector: 'app-biblioteca-form',
  imports: [ReactiveFormsModule],
  templateUrl: './biblioteca-form.component.html'
})
export class BibliotecaForm {

  private readonly bibliotecaService = inject(BibliotecaService);

  readonly registrada = output<void>();

  readonly guardando = signal(false);
  readonly mensaje = signal('');
  readonly error = signal('');

  readonly form = new FormGroup({
    nombre: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    direccion: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    ciudad: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  invalido(campo: 'nombre' | 'direccion' | 'ciudad'): boolean {
    const control = this.form.controls[campo];
    return control.touched && control.invalid;
  }

  registrar(): void {
    if (this.guardando()) return;
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    this.mensaje.set('');
    this.error.set('');
    this.guardando.set(true);

    this.bibliotecaService.registrar(this.form.getRawValue())
      .pipe(finalize(() => this.guardando.set(false)))
      .subscribe({
        next: (biblioteca) => {
          this.mensaje.set(`Biblioteca "${biblioteca.nombre}" registrada.`);
          this.form.reset();
          this.registrada.emit();
        },
        error: () => this.error.set('No se pudo registrar la biblioteca. Verifique que el backend esté en ejecución.')
      });
  }
}
