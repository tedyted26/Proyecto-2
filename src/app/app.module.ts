import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameCentralComponent } from './frame-central/frame-central.component';
import { DescripcionCardComponent } from './descripcion-card/descripcion-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { WelcomeCardComponent } from './welcome-card/welcome-card.component';
import { SeccionEquipoComponent } from './seccion-equipo/seccion-equipo.component';
import { TarjetaIntegranteComponent } from './tarjeta-integrante/tarjeta-integrante.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { PaginaError404Component } from './pagina-error404/pagina-error404.component';
import { SentimentCardComponent } from './sentiment-card/sentiment-card.component';
import { SentimentTitleComponent } from './sentiment-title/sentiment-title.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { NoticiaCardComponent } from './noticia-card/noticia-card.component';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { OpcionesAdminComponent } from './opciones-admin/opciones-admin.component';
import { EstadAdminComponent } from './estad-admin/estad-admin.component';



@NgModule({
  declarations: [
    AppComponent,
    FrameCentralComponent,
    DescripcionCardComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeCardComponent,
    SeccionEquipoComponent,
    TarjetaIntegranteComponent,
    SentimentAnalysisComponent,
    QuienesSomosComponent,
    PaginaError404Component,
    SentimentCardComponent,
    SentimentTitleComponent,
    NewsCardComponent,
    NoticiaCardComponent,

    LoginComponent,
    RegistroComponent,

    MenuAdminComponent,
    OpcionesAdminComponent,
    EstadAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
