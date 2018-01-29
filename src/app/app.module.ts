import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OriginsComponent } from './origins/origins.component';
import { BasicsService } from './basics.service';
import { OriginsService } from './origins.service';



@NgModule({
  declarations: [
    AppComponent,
    OriginsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BasicsService, OriginsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
