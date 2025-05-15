import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-suscribete',
  imports: [RouterModule],
  templateUrl: './suscribete.component.html',
  styleUrl: './suscribete.component.scss'
})
export class SuscribeteComponent {
  constructor(public languageService: LanguageService) {}
}
