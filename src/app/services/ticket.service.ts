import { Injectable } from '@angular/core';
import { TICKETS } from './mocks/tickets.mock';

@Injectable() // con esta linea le decimos que esta clase sera injectable

export class TicketService {
	miVariableGlobal = 'soy una variable global';

	getTicket() {
		return TICKETS;
	}

	getVariableGlobal():string {
		return this.miVariableGlobal;
	}
}