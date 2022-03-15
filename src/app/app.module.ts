import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// identify the class as an Angular module by attaching
// the @Ngmodule detector and passing metadata defining
// the details af this Angular module. the properties
// are arrays
@NgModule({
  // declarations array define which of components belong
  // to this module
  declarations: [
    AppComponent
  ],
  // imports array define the external modules that want
  // to have available to all of the components that belong
  // to this angular  module. external modules could be
  // provided by angular
  imports: [
    BrowserModule
  ],

  // bootstrap array defines the startup component of the app
  //it have to contain the selector used in index.html
  bootstrap: [AppComponent]
})
export class AppModule { }
