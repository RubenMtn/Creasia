import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-landing',
  standalone: true, // Indica que este es un componente independiente
  imports: [RouterModule], // Importa RouterModule para habilitar routerLink
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  constructor(public languageService: LanguageService) {}
}
