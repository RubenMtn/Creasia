import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-consultoria',
  imports: [RouterModule], // Añade RouterModule aquí
  templateUrl: './consultoria.component.html',
  styleUrl: './consultoria.component.scss'
})
export class ConsultoriaComponent {
  constructor(public languageService: LanguageService) {}
}