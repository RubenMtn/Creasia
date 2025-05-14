import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './language.service';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';

@Component({
  // imports: [RouterOutlet],
  selector: 'app-root',
  standalone: true, // Indica que este es un componente independiente
  //imports: [RouterOutlet, LandingComponent], // Importa RouterOutlet y LandingComponent
  imports: [RouterOutlet, HeaderComponent, FooterComponent], // Importa RouterOutlet
  // template: '<app-landing></app-landing>', // Usa el selector del componente (si no no se ve el h1)
  templateUrl: './app.component.html', // Usa el archivo app.component.html
  // styleUrl: './app.component.scss'
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-landing-page';
  constructor(public languageService: LanguageService) {}

  ngOnInit() {
    this.setDragonPosition();
  }

  @HostListener('window:resize')
  onResize() {
    this.setDragonPosition();
  }

  setDragonPosition() {
    const width = window.innerWidth;
    let pos = '';
    if (width <= 700) {
      pos = `calc(100% + 130px) top`;
    } else if (width >= 1025) {
      pos = `calc(100% - 300px) top`;
    } else {
      // Interpolación suave entre 701px y 1024px
      const factor = (width - 701) / (1024 - 701);
      const px = 130 - (430 * factor) / 2.7;
      pos = `calc(100% + ${px}px) top`;
    }
    document.body.style.backgroundPosition = pos;
    document.documentElement.style.backgroundPosition = pos;
  }

  changeLanguage(language: string): void {
    this.languageService.setLanguage(language);
  }
}