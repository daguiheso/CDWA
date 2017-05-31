import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  votacion = '';

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

}
