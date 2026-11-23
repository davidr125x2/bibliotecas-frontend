
export interface Libro {
  id: number;
  titulo: string;
  autor: string;
  anioPublicacion: number;
}

export interface Biblioteca {
  id: number;
  nombre: string;
  direccion: string;
  ciudad: string;
  libros: Libro[];
}

export interface BibliotecaRequest {
  nombre: string;
  direccion: string;
  ciudad: string;
}
