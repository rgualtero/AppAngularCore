/*
 * Se crea arreglo LstElementos hereda de la interface
 * Se inicializan formcontrol vacios y se crea viewchild
 * Constructor inicializa y contiene el servicio
 * Metodo GetInfo (GET) Angular se inicia en el constructor ejecuta funcion GetMensaje del chatservice y almacena en LstElementos
 * Metodo AddEnvio (POST) Angular se ejecuta al presionar el button ejecuta funcion Add de chatservice y almacena en BD
 */

import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatserviceService } from '../services/chatservice.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Mensaje } from '../interfaces';
import { setTimeout } from 'timers';
import { getLocaleWeekEndRange } from '@angular/common';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})

export class ChatComponent {

  public LstElementos: Observable<Mensaje[]>;

  //Valores de los Form_Control del html
  nombreControl = new FormControl('');
  textoControl = new FormControl('');
  @ViewChild('viewText') viewText: ElementRef;


  //Constructor
  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string,
    //Servicio Inyectado
    protected chatService: ChatserviceService) {
    this.GetInfo();
  }

  //Metodo GET Angular 
  public GetInfo() {
    this.LstElementos = this.chatService.GetMensaje();
  }

  //Metodo POST Angular 
  public AddEnvio() {    
    this.chatService.Add(this.nombreControl.value, this.textoControl.value);  //Ejecuta la funcion

    setTimeout(() => {                      //Espera un tiempo de respuesta despues de insercion
      this.GetInfo();
    }, 300);

    this.textoControl.setValue('');        //Limpia los controles
    this.viewText.nativeElement.focus();   //Asigna el focus viewChild
  }

}
