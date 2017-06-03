import { Component } from '@angular/core';

import { TicketService } from './services/ticket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  votacion = '';
  tickets: any;

  votos = [
    {title: 'opcion 1'},
    {title: 'opcion 2'},
    {title: 'opcion 3'},
    {title: 'opcion 4'},
    {title: 'opcion 5'}
  ]

  // todos los servicios o injecciones que utilizemos hay que declararlas en el componente
  constructor(private ticketService:TicketService) {
    this.tickets = ticketService.getTicket();
  }

  addVoto(response:string) {
    this.votacion = 'usted eligio la ' + response;
  }

  cantidad = 5;
  factor = 1;

  onSubmit(form:any): void {
    console.log('El formulario tiene', form);
  }

}
