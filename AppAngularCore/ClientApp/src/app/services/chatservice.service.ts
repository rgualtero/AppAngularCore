import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Mensaje, MyResponse } from '../interfaces';


// Headers utiles para la solicitud POST
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
    })
}

@Injectable()


export class ChatserviceService {

  //Atributos se muestran en el chat.component.html
  public Message: string = "Envio Datos desde el ChatService";
  public Chat: string = "Chat Angular NetCore";


  baseUrl: string;


  //Constructor 
  constructor(protected http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.baseUrl = baseUrl
  }


  //Metodo GET Consulta el API de .NetCore por http
  public GetMensaje(): Observable<Mensaje[]> {
    return this.http.get<Mensaje[]>(this.baseUrl + "api/chat/Mensaje");
  }


  //Metodo POST Ejecuta el API de .NetCore por http
  //Envia los datos por json a travez de la ruta
  public Add(nombre, texto) {
    this.http.post<MyResponse>
      (this.baseUrl + "api/chat/Add", { 'Nombre': nombre, 'Texto': texto },httpOptions).   //Solicitud POST Ruta,Json,httpOptions
      subscribe(result =>      //Metodo verifica el resultado
      {
          console.log(result);
      },error => console.error(error));
  }
}
