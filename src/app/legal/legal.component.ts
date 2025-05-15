import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-legal',
  imports: [RouterModule], // Añade RouterModule aquí
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.scss'
})
export class LegalComponent {
  constructor(public languageService: LanguageService) {}
}
