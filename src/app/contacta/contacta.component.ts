import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-contacta',
  imports: [RouterModule],
  templateUrl: './contacta.component.html',
  styleUrl: './contacta.component.scss'
})
export class ContactaComponent {
  constructor(public languageService: LanguageService) {}
}
