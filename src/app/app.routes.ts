import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ViajesComponent } from './viajes/viajes.component';
import { CafeIdiomaComponent } from './cafe-idioma/cafe-idioma.component';
import { ConsultoriaComponent } from './consultoria/consultoria.component';
import { SuscribeteComponent } from './suscribete/suscribete.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { RedsocialComponent } from './redsocial/redsocial.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { LegalComponent } from './legal/legal.component';
import { ContactaComponent } from './contacta/contacta.component';

export const routes: Routes = [
  { path: '', component: LandingComponent }, // Ruta para la página principal
  { path: 'viajes', component: ViajesComponent }, // Ruta para la pantalla "Viajes"
  { path: 'cafe-idioma', component: CafeIdiomaComponent }, // Ruta para la pantalla "Café y chino"
  { path: 'consultoria', component: ConsultoriaComponent }, // Ruta para la pantalla "Consultoría"
  { path: 'suscribete', component: SuscribeteComponent }, // Ruta para la pantalla "Suscríbete"
  { path: 'nosotros', component: NosotrosComponent }, // Ruta para la pantalla "Nosotros"
  { path: 'redsocial', component: RedsocialComponent }, // Ruta para la pantalla "Redes sociales"
  { path: 'novedades', component: NovedadesComponent }, // Ruta para la pantalla "Novedades"
  { path: 'legal', component: LegalComponent }, // Ruta para la pantalla "Legal"
  { path: 'contacta', component: ContactaComponent } // Ruta para la pantalla "Contacto"
];