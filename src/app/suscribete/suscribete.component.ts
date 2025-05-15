import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';
import { UsuariosService } from '../services/usuarios.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suscribete',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './suscribete.component.html',
  styleUrl: './suscribete.component.scss'
})
export class SuscribeteComponent {
  usuario = {
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    edad: '',
    comentarios: ''
  };

  enviado = false;
  emailInvalido = false;

  constructor(
    public languageService: LanguageService,
    private usuariosService: UsuariosService
  ) {}

  // Al escribir en el campo email, el fondo vuelve a blanco
  onEmailInput() {
    this.emailInvalido = false;
  }

  // Solo devuelve true si el email es válido
  validarEmail(): boolean {
    const email = this.usuario.email || '';
    return (
      email.includes('@') &&
      email.includes('.') &&
      email.length >= 7
    );
  }

  onSubmit() {
    // Validar email solo al pulsar el botón
    if (!this.validarEmail()) {
      this.emailInvalido = true;
      return;
    }

    const usuarioConFecha = {
      ...this.usuario,
      fechaSuscripcion: new Date().toISOString()
    };
    this.usuariosService.addUsuario(usuarioConFecha).subscribe(() => {
      this.usuario = {
        nombre: '',
        apellidos: '',
        email: '',
        telefono: '',
        edad: '',
        comentarios: ''
      };
      this.enviado = true;
      this.emailInvalido = false;
    });
  }
}