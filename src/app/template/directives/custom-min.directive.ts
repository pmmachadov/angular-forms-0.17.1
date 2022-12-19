import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({ // @Directive es un decorador que me permite crear una directiva.
    selector: '[customMin][ngModel]',   // El selector de la directiva es customMin. Es decir, la directiva se va a usar en el html de la siguiente manera: <input type="number" customMin [minimo]="10" [(ngModel)]="precio" />
    providers: [{ // El decorador @Directive recibe un objeto que contiene un array llamado providers. El array providers contiene un objeto que contiene un token llamado NG_VALIDATORS y un valor llamado useExisting. El token NG_VALIDATORS es un token que me permite crear validadores personalizados. El valor useExisting es el nombre de la directiva que se va a usar como validador personalizado. En este caso, el nombre de la directiva es CustomMinDirective.
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validator {  // La clase CustomMinDirective implementa la interfaz Validator. La interfaz Validator tiene una función llamada validate que recibe un parámetro de tipo FormControl y retorna un objeto de tipo any. El objeto de tipo any tiene dos propiedades. La propiedad customMin es de tipo boolean y tiene el valor true. La propiedad minimo es de tipo number y tiene el valor de la propiedad minimo de la directiva.

    @Input() minimo!: number; // La propiedad minimo es de tipo number y tiene el valor de la propiedad minimo de la directiva. La propiedad minimo es una propiedad de entrada de la directiva. Es decir, la propiedad minimo se va a usar en el html de la siguiente manera: <input type="number" customMin [minimo]="10" [(ngModel)]="precio" />

    constructor() {} // El constructor de la clase CustomMinDirective no recibe ningún parámetro.

    validate( control: FormControl ) { // La función validate recibe un parámetro de tipo FormControl y retorna un objeto de tipo any. El objeto de tipo any tiene dos propiedades. La propiedad customMin es de tipo boolean y tiene el valor true. La propiedad minimo es de tipo number y tiene el valor de la propiedad minimo de la directiva.
        const inputValue = control.value;
        return ( inputValue < this.minimo )
                ? { 'customMin': true }
                : null;
    }

}
