import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OriginsComponent } from './origins/origins.component';
import { BasicsService } from './basics.service';
import { OriginsService } from './origins.service';
import { BasicsComponent } from './basics/basics.component';
import { PersonaldecisionsComponent } from './personaldecisions/personaldecisions.component';
import { PersonaldecisionsService } from './personaldecisions.service';



@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    OriginsComponent,
    PersonaldecisionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BasicsService, OriginsService, PersonaldecisionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
