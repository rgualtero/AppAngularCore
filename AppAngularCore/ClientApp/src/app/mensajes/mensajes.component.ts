/*
 * Importa Interfaces
 * Interface Mensaje se carga en Metodo GET chat.component.ts
 * Crea Input ObjMensaje se carga de Interface Mensaje
 */


import { Component, Input } from '@angular/core';
import { Mensaje } from '../interfaces';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styles: []
})


export class MensajesComponent {

  @Input() ObjMensaje: Mensaje;

  constructor() { }
}
