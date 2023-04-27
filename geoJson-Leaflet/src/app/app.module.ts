import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkerService } from './marker.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MarkerService 
  ],
  // npx @angular/cli generate service marker --skip-tests
  bootstrap: [AppComponent]
})
export class AppModule { }
