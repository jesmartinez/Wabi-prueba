import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticlesComponent } from './pages/articles/articles.component';
import { SubmenuComponent } from './pages/articles/components/submenu/submenu.component';
import { MaterialModule } from './material/material.module';
import { AboutMeComponent } from './pages/articles/components/about-me/about-me.component'

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    SubmenuComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
