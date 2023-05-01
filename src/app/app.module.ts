import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeHeaderComponent } from './components/anime-header/anime-header.component';
import { AnimeFooterComponent } from './components/anime-footer/anime-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeHeaderComponent,
    AnimeFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
