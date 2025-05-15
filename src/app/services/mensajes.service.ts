import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MensajesService {
  private apiUrl = 'http://localhost:3000/mensajes';

  constructor(private http: HttpClient) {}

  addMensaje(mensaje: any) {
    return this.http.post(this.apiUrl, mensaje);
  }
}