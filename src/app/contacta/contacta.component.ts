import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MensajesService } from '../services/mensajes.service';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-contacta',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contacta.component.html',
  styleUrl: './contacta.component.scss'
})
export class ContactaComponent {
  
  mensaje = {
    email: '',
    contenido: ''
  };

  enviado = false;
  emailInvalido = false;
  contenidoInvalido = false;

constructor(
  private mensajesService: MensajesService,
  public languageService: LanguageService
) {}

  onEmailInput() {
    this.emailInvalido = false;
  }

  onContenidoInput() {
    this.contenidoInvalido = false;
  }

  validarEmail(): boolean {
    const email = this.mensaje.email || '';
    return (
      email.includes('@') &&
      email.includes('.') &&
      email.length >= 7
    );
  }

  onSubmit() {
    this.emailInvalido = !this.validarEmail();
    this.contenidoInvalido = !this.mensaje.contenido || this.mensaje.contenido.trim().length === 0;

    if (this.emailInvalido || this.contenidoInvalido) {
      return;
    }

    const mensajeConFecha = {
      ...this.mensaje,
      fechaEnvio: new Date().toISOString()
    };

    this.mensajesService.addMensaje(mensajeConFecha).subscribe(() => {
      this.mensaje = { email: '', contenido: '' };
      this.enviado = true;
      this.emailInvalido = false;
      this.contenidoInvalido = false;
    });
  }
}