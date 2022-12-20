import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compartir/header/header.component';
import { FooterComponent } from './compartir/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { PagarComponent } from './pages/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent, 
    MainComponent, 
    ProductoComponent, 
    PagarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
