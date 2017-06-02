import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//pipes
import { ConversorPipe } from './pipes/conversor.pipe';

// input
import { InputComponent } from './input/input.component';

// directives
import { GigantDirective } from './directives/gigant.directive';
import { HightlightDirective } from './directives/hightlight.directive';

// service
import { TicketService } from './services/ticket.service';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ConversorPipe,
    GigantDirective,
    HightlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
