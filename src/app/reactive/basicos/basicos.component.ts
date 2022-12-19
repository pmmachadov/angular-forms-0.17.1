import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre     : new FormControl('RTX 4080ti'),
  //   precio     : new FormControl(1500),
  //   existencias: new FormControl(5),
  // })

  miFormulario: FormGroup = this.fb.group({ // El atributo miFormulario es de tipo FormGroup. Es inicializado con la función group() del objeto fb de tipo FormBuilder. La función group() recibe un objeto de tipo any. El objeto de tipo any tiene tres propiedades:
    
    nombre: [ , [ Validators.required, Validators.minLength(3) ]   ], // El primer argumento es el valor por defecto. El segundo argumento es un arreglo de validadores.
    precio: [ , [ Validators.required, Validators.min(0)] ], // El primer argumento es el valor por defecto. El segundo argumento es un arreglo de validadores.
    existencias: [ , [ Validators.required, Validators.min(0)] ], // El primer argumento es el valor por defecto. El segundo argumento es un arreglo de validadores.
  })

  constructor( private fb: FormBuilder ) { } // El constructor recibe un argumento llamado fb de tipo FormBuilder. El argumento fb es de tipo privado.

  ngOnInit() { // La función ngOnInit() asigna al formulario el valor de los campos nombre, precio y existencias.
    this.miFormulario.reset({
      nombre: 'RTX 4080ti',
      precio: 1600
    })
  }


  campoEsValido( campo: string ) { // La función campoEsValido() recibe un argumento llamado campo de tipo string. La función campoEsValido() retorna un booleano. La función campoEsValido() retorna true si el campo es válido y false si el campo es inválido.

    return this.miFormulario.controls[campo].errors
            && this.miFormulario.controls[campo].touched;
  }

  guardar() { // La función guardar() verifica si el formulario es válido. Si el formulario es válido, la función guardar() imprime en la consola el valor del formulario. La función guardar() reinicia el formulario.

    if ( this.miFormulario.invalid )  {
      this.miFormulario.markAllAsTouched(); // La función markAllAsTouched() marca todos los campos del formulario como tocados.
      return;
    }


    console.log(this.miFormulario.value);
    this.miFormulario.reset(); // La función reset() reinicia el formulario.
  }



}
