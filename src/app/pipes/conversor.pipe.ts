import { Pipe, PipeTransform } from '@angular/core';

// nombrando pipe
@Pipe({ name: 'conversorPipe' })

// implements lo que hace es tomar las funcionalidades del componente padre indicado, como herencia
export class ConversorPipe implements PipeTransform {
	transform(value: number, exponent: string): number {
		let exp = parseFloat(exponent);
		// isNaN => is not a number - si no es un numero
		return value * (isNaN(exp) ? 1 : exp);
	}
}