import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-redsocial',
  imports: [RouterModule], // Añade RouterModule aquí
  templateUrl: './redsocial.component.html',
  styleUrl: './redsocial.component.scss'
})
export class RedsocialComponent {
  constructor(public languageService: LanguageService) {}
}
