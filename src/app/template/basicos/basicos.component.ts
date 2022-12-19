import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos', // Nombre del componente que se va a usar en el html. En este caso, basicos.component.html <app-basicos></app-basicos>
  templateUrl: './basicos.component.html', // Nombre del archivo html que se va a usar en este componente.
  styles: [
  ]
})
export class BasicosComponent implements OnInit { // BasicosComponent es una clase que hereda de la clase OnInit. OnInit es una interfaz que tiene un metodo llamado ngOnInit. ngOnInit es un metodo que se ejecuta cuando el componente se inicializa.

  @ViewChild('miFormulario') miFormulario!: NgForm; // @ViewChild('miFormulario') es un decorador que me permite acceder a un elemento del html. En este caso, al elemento del html que tiene el nombre miFormulario.

  initForm = { // initForm es un objeto que contiene los valores iniciales del formulario.
    producto: 'RTX 4080ti', // El valor inicial del input que tiene el nombre producto es RTX 4080ti.
    precio: 10, // El valor inicial del input que tiene el nombre precio es 10.
    existencias: 10 // El valor inicial del input que tiene el nombre existencias es 10.
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean { // nombreValido es una funcion que retorna un booleano. La funcion nombreValido retorna true si el input que tiene el nombre producto es invalido y si el input que tiene el nombre producto fue tocado. La funcion nombreValido retorna false si el input que tiene el nombre producto es valido o si el input que tiene el nombre producto no fue tocado. Retorna true si el input que tiene el nombre producto es invalido y si el input que tiene el nombre producto fue tocado. Retorna false si el input que tiene el nombre producto es valido o si el input que tiene el nombre producto no fue tocado.
    return this.miFormulario?.controls.producto?.invalid
            && this.miFormulario?.controls.producto?.touched;
  }

  precioValido():boolean { // precioValido es una funcion que retorna un booleano. La funcion precioValido retorna true si el input que tiene el nombre precio es invalido y si el input que tiene el nombre precio fue tocado. La funcion precioValido retorna false si el input que tiene el nombre precio es valido o si el input que tiene el nombre precio no fue tocado. Retorna true si el input que tiene el nombre precio es invalido y si el input que tiene el nombre precio fue tocado. Retorna false si el input que tiene el nombre precio es valido o si el input que tiene el nombre precio no fue tocado.
    return this.miFormulario?.controls.precio?.touched
            && this.miFormulario?.controls.precio?.value < 0;
  }

  // guardar( miFormulario: NgForm ) {
  guardar() {
    // console.log( this.miFormulario );
    console.log('Posteo correcto');

    this.miFormulario.resetForm({ // resetForm es un metodo que me permite reiniciar el formulario. El metodo resetForm recibe un objeto que contiene los valores iniciales del formulario.
      producto: 'Algo', // El valor inicial del input que tiene el nombre producto es Algo.
      precio: 0,  // El valor inicial del input que tiene el nombre precio es 0.
      existencias: 0  // El valor inicial del input que tiene el nombre existencias es 0.
    });
  }

}
