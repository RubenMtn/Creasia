import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-novedades',
  imports: [RouterModule], // Añade RouterModule aquí
  templateUrl: './novedades.component.html',
  styleUrl: './novedades.component.scss'
})
export class NovedadesComponent {
  constructor(public languageService: LanguageService) {}
}
