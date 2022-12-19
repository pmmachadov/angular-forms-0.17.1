import { Component } from '@angular/core';

interface Persona { // Persona es una interfaz que tiene dos propiedades. La propiedad nombre es de tipo string. La propiedad favoritos es de tipo Favorito[].
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {  // Favorito es una interfaz que tiene dos propiedades. La propiedad id es de tipo number. La propiedad nombre es de tipo string.
  id: number;
  nombre: string;
}



@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent { // La clase DinamicosComponent tiene una propiedad llamada persona de tipo Persona. La propiedad persona tiene dos propiedades. La propiedad nombre es de tipo string y tiene el valor Fernando. La propiedad favoritos es de tipo Favorito[] y tiene dos objetos. El primer objeto tiene dos propiedades. La propiedad id es de tipo number y tiene el valor 1. La propiedad nombre es de tipo string y tiene el valor Metal Gear. El segundo objeto tiene dos propiedades. La propiedad id es de tipo number y tiene el valor 2.

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Fernando',
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      { id: 2, nombre: 'Death Stranding' },
    ]
  }

  agregarJuego() { // La función agregarJuego() tiene una constante llamada nuevoFavorito de tipo Favorito. La constante nuevoFavorito tiene dos propiedades. La propiedad id es de tipo number y tiene el valor de la longitud de la propiedad favoritos de la propiedad persona más 1. La propiedad nombre es de tipo string y tiene el valor de la propiedad nuevoJuego. La función agregarJuego() agrega al final del arreglo de la propiedad favoritos de la propiedad persona el objeto que tiene las propiedades id y nombre. La función agregarJuego() asigna el valor de la propiedad nuevoJuego a la cadena vacía.
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoJuego = '';
  }

  eliminar( index: number ) {
    this.persona.favoritos.splice(index, 1);
  }


  guardar() {
    console.log('formulario posteado');
  }
}
