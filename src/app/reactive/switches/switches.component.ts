import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({ // El atributo miFormulario es de tipo FormGroup. Es inicializado con la función group() del objeto fb de tipo FormBuilder. La función group() recibe un objeto de tipo any. El objeto de tipo any tiene tres propiedades: nombre, favoritos y precio.
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    condiciones: [ false, Validators.requiredTrue ] // Aqui le mandamos la referencia a la funcion. No la ejecutamos. No le pongo requiredTrue() porque es una funcion, no un valor.
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  }


  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.miFormulario.reset({ // resetea el formulario con los valores del objeto persona (this.persona). En este caso los valores son: genero: 'F', notificaciones: true
      ...this.persona, // ...this.persona es un spread operator. Lo uso para mostrar todo lo que la persona tiene. En este caso: genero: 'F', notificaciones: true.
      condiciones: false
    });

    this.miFormulario.valueChanges.subscribe( ({ condiciones, ...rest }) => { // valueChanges es un observable que me permite escuchar los cambios que se producen en el formulario. En este caso, cuando cambia el valor de condiciones, se ejecuta el codigo que esta dentro del subscribe. El codigo que esta dentro del subscribe es una funcion flecha. La funcion flecha recibe como parametro un objeto que se llama rest. El objeto rest es un objeto que contiene todo lo que esta dentro de miFormulario, excepto condiciones. En este caso, rest es un objeto que contiene: genero: 'F', notificaciones: true.

      // delete form.condiciones;
      this.persona = rest;
    })

  }

  guardar() {

    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;

    this.persona = formValue;

  }

}
