import { Component } from '@angular/core';

import { TicketService } from './services/ticket.service';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  votacion = '';
  tickets: any;

  // creando grupo de datos para nuestro form reactivo, luego desde hay lo podriamos validar, asignar un parametro por defecto, etc...
  myForm: FormGroup;

  constructor(
   // todos los servicios o injecciones que utilizemos hay que declararlas en el componente
    private ticketService: TicketService,
    // creando dependencia de nuestro formulario reactivo. El formBUilder es el que hace reactivo nuestro form (lo va a bindear en el momento que se lo pidamos)
    private fb:FormBuilder
  ) {
    this.tickets = ticketService.getTicket();

    // le decimos que va a ser un tipo de formBuilder (array, control o group), en este caso sera group para darle los parametros iniciales
    this.myForm = fb.group({
      'name': ['Ecopetrol'],
      'telefono': ['3116710255']
    });

  }

  votos = [
    {title: 'opcion 1'},
    {title: 'opcion 2'},
    {title: 'opcion 3'},
    {title: 'opcion 4'},
    {title: 'opcion 5'}
  ]


  addVoto(response:string) {
    this.votacion = 'usted eligio la ' + response;
  }

  cantidad = 5;
  factor = 1;

  onSubmit(form:any): void {
    console.log('El formulario tiene', form);
  }

  onSubmitReactivo(value:string): void {
    console.log('El formulario tiene', value);
  }

}
