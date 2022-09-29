import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main/header/header.component';
import { MenuComponent } from './components/main/menu/menu.component';
import { LayoutComponent } from './components/main/layout/layout.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { CharactersComponent } from './components/characters/characters.component';
import { RickandmortyListComponent } from './components/rickandmorty/rickandmorty-list/rickandmorty-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    LayoutComponent,
    FooterComponent,
    CharactersComponent,
    RickandmortyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
