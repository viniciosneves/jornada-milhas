import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuscaComponent } from './pages/busca/busca.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';

import { ContainerComponent } from './shared/container/container.component';
import { CardComponent } from './shared/card/card.component';
import { FormBuscaComponent } from './pages/busca/components/form-busca/form-busca.component';

import { FormsModule } from '@angular/forms';



import { NgClass } from '@angular/common';
import { TituloComponent } from './pages/busca/components/titulo/titulo.component';
import { BuscaCardComponent } from './pages/busca/components/busca-card/busca-card.component';
import { DepoimentoComponent } from './pages/busca/components/depoimento/depoimento.component';



@NgModule({
  declarations: [
    AppComponent,
    BuscaComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ContainerComponent,
    CardComponent,
    FormBuscaComponent,
    TituloComponent,
    BuscaCardComponent,
    DepoimentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    FormsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
  ],
  providers: [NgClass],
  bootstrap: [AppComponent]
})
export class AppModule { }
