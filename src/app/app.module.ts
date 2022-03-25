import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {AppComponent} from './app.component';
import {ProductListComponent} from "./products/product-list.component";
import {ConvertToSpacePipe} from "./shared/convert-to-space.pipe";
import {StarComponent} from "./shared/star.component";
import {HttpClientModule} from "@angular/common/http";
import {ProductDetailComponent} from './products/product-detail.component';
import {WelcomeComponent} from "./home/welcome.component";
import {RouterModule} from "@angular/router";
// identify the class as an Angular module by attaching
// the @Ngmodule detector and passing metadata defining
// the details af this Angular module. the properties
// are arrays
@NgModule({
  // declarations array define which of components belong
  // to this module
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    StarComponent,
    ProductDetailComponent
  ],
  // imports array define the external modules that want
  // to have available to all of the components that belong
  // to this angular  module. external modules could be
  // provided by angular
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],

  // bootstrap array defines the startup component of the app
  //it have to contain the selector used in index.html
  bootstrap: [AppComponent]
})
export class AppModule {
}
