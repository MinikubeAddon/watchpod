import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import {
  EntryListComponent,
  EntryComponent,
  EntryService,
  EntryListModal,
  HeaderContent,
  Box,
  DefaultModal
} from './entries/index';

const appRoutes: Routes = [
  {
    path: '',
    component: HeaderContent
  },
  { path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    EntryComponent,
    EntryListComponent,
    EntryListModal,
    HeaderContent,
    Box,
    DefaultModal
  ],
  providers: [
    EntryService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
