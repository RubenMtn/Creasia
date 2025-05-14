import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    public languageService: LanguageService,
    private router: Router
  ) {}

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
    return this.languageService.getTranslation('welcome');
  }
}