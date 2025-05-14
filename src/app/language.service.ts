import { Injectable } from '@angular/core';
import translations from '../assets/i18n/translations.json';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = 'es'; // Idioma por defecto
  private translations: any = translations;

  getTranslation(key: string): string {
    return this.translations[this.currentLanguage][key] || key;
  }

  setLanguage(language: string): void {
    if (this.translations[language]) {
      this.currentLanguage = language;
    }
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }
}