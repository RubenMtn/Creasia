import { Component } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-cafe-idioma',
  imports: [],
  templateUrl: './cafe-idioma.component.html',
  styleUrl: './cafe-idioma.component.scss'
})
export class CafeIdiomaComponent {
  constructor(public languageService: LanguageService) {}
}
