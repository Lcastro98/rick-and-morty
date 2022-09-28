import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main/header/header.component';
import { MenuComponent } from './components/main/menu/menu.component';
import { LayoutComponent } from './components/main/layout/layout.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { CharactersComponent } from './components/characters/characters.component';
import { RickandmortyComponent } from './components/rickandmorty/rickandmorty.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    LayoutComponent,
    FooterComponent,
    CharactersComponent,
    RickandmortyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
