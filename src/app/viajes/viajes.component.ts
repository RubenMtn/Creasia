import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-viajes',
  imports: [RouterModule], // Añade RouterModule aquí
  templateUrl: './viajes.component.html',
  styleUrl: './viajes.component.scss'
})
export class ViajesComponent {
  constructor(public languageService: LanguageService) {}
}