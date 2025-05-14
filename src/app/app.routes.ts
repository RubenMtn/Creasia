import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ViajesComponent } from './viajes/viajes.component';

export const routes: Routes = [
  { path: '', component: LandingComponent }, // Ruta para la página principal
  { path: 'viajes', component: ViajesComponent }, // Ruta para la pantalla "Viajes"
];