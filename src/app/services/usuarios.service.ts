import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UsuariosService {
  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  // Añadir un usuario
  addUsuario(usuario: any) {
    return this.http.post(this.apiUrl, usuario);
  }

  // Obtener todos los usuarios
  getUsuarios() {
    return this.http.get(this.apiUrl);
  }
}