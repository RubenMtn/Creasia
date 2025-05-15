import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // <-- Importa esto
import { FormsModule } from '@angular/forms';
import { SuscribeteComponent } from './suscribete/suscribete.component';

@NgModule({
  declarations: [
    // SuscribeteComponent, // Removed because it's standalone
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule, // <-- Añade aquí
    SuscribeteComponent, // <-- Import standalone component here
    // ...otros módulos
  ],
  bootstrap: [/* ... */]
})
export class AppModule { }