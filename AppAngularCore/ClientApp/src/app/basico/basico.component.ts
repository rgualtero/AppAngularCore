import { Component, OnInit } from '@angular/core';
import { strictEqual } from 'assert';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styles: []
})
export class BasicoComponent implements OnInit {

  public nombre = "Ronald Gualtero";
  public ListaElementos: string[] = ["ElementoUno", "ElementoDos", "ElementoTres","ElementoCuatro"];

  constructor() { }

  ngOnInit() {
  }

  CambiarNombre() {
    this.nombre = "Ronald Gualtero Ariza";
  }

}
