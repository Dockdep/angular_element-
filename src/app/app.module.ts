import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DropdownDirective } from 'src/directives/dropdown.directive';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { LocationSectionComponent } from './location-section/location-section.component';
import { LanguageSectionComponent } from './language-section/language-section.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    LocationSectionComponent,
    LanguageSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
