import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgClass, CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgClass, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  idiomsMenuOpen = false;
  private idiomsMenuTimeout: any;

  toggleIdiomsMenu() {
    this.idiomsMenuOpen = !this.idiomsMenuOpen;

    // Si se abre el menú, inicia el temporizador
    if (this.idiomsMenuOpen) {
      this.startIdiomsMenuTimeout();
    } else {
      this.clearIdiomsMenuTimeout();
    }
  }

  closeMenu() {
    this.idiomsMenuOpen = false;
    this.clearIdiomsMenuTimeout();
  }

  private startIdiomsMenuTimeout() {
    this.clearIdiomsMenuTimeout();
    this.idiomsMenuTimeout = setTimeout(() => {
      this.idiomsMenuOpen = false;
    }, 10000);
  }
    private clearIdiomsMenuTimeout() {
    if (this.idiomsMenuTimeout) {
      clearTimeout(this.idiomsMenuTimeout);
      this.idiomsMenuTimeout = null;
    }
  }
  constructor(
    public languageService: LanguageService,
    public router: Router
  ) {}

get descriptionKey() {
  if (this.router.url === '/viajes') {
    return 'descriptViajes';
  }
  if (this.router.url === '/cafe-idioma') {
    return 'descriptClases';
  }
  if (this.router.url === '/consultoria') {
    return 'descriptConsult';
  }
  if (this.router.url === '/nosotros') {
    return 'descriptUs';
  }
  if (this.router.url === '/suscribete') {
    return 'descriptSuscribe';
  }
  if (this.router.url === '/redsocial') {
    return 'descriptMedia';
  }
  if (this.router.url === '/novedades') {
    return 'descriptNovedades';
  }
  if (this.router.url === '/legal') {
    return 'descriptLegal';
  }
  if (this.router.url === '/contacta') {
    return 'descriptContacto';
  }
  return 'description';
}

  getCurrentLanguage(): string {
    return this.languageService.getCurrentLanguage();
  }

  changeLanguage(language: string): void {
    this.languageService.setLanguage(language);
  }

 getWelcomeText(): string {
  // Cambia el texto según la ruta
  if (this.router.url.startsWith('/viajes')) {
    return this.languageService.getTranslation('viajaCon');
  }
  if (this.router.url.startsWith('/cafe-idioma')) {
    return this.languageService.getTranslation('cafeCon');
  }
  if (this.router.url.startsWith('/consultoria')) {
    return this.languageService.getTranslation('consultaCon');
  }
  if (this.router.url.startsWith('/nosotros')) {
    return this.languageService.getTranslation('sobreCon');
  }
  if (this.router.url.startsWith('/suscribete')) {
    return this.languageService.getTranslation('sucribeCon');
  }
  if (this.router.url.startsWith('/redsocial')) {
    return this.languageService.getTranslation('socialCon');
  }
  if (this.router.url.startsWith('/novedades')) {
    return this.languageService.getTranslation('novedadCon');
  }
  if (this.router.url.startsWith('/legal')) {
    return this.languageService.getTranslation('legalCon');
  }
  if (this.router.url.startsWith('/contacta')) {
    return this.languageService.getTranslation('contactoCon');
  }
  return this.languageService.getTranslation('welcome');
}
}
