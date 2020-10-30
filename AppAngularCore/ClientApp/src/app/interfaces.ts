
//Interface Mensajes del GET
export interface Mensaje {
  Id: number,
  Nombre: string,
  Texto: string;
}


//Interface Mensajes del POST
export interface MyResponse {
  Estado: number,
  Mensaje: string,
  Data: any;
}



