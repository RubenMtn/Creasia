import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-cafe-idioma',
  imports: [RouterModule], // Añade RouterModule aquí
  templateUrl: './cafe-idioma.component.html',
  styleUrl: './cafe-idioma.component.scss'
})
export class CafeIdiomaComponent {
  constructor(public languageService: LanguageService) {}
}
