import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-nosotros',
  imports: [RouterModule], // Añade RouterModule aquí
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.scss'
})
export class NosotrosComponent {
  constructor(public languageService: LanguageService) {}
}
