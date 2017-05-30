import { Component, Input} from '@angular/core';

@Component({
	selector: 'input-component',
	templateUrl: 'input.component.html',
	styleUrls: ['input.component.css'] //styleUrl recibe un array de datos
})

export class InputComponent {
	 // Se usa el decorator o anotation @Input() para declarar que tendremos un input del tipo string de nombre voto
	@Input() voto:string;

	constructor() {
		console.log('estoy entrando')
	}

}