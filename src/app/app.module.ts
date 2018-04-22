import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OriginsComponent } from './origins/origins.component';
import { BasicsService } from './basics.service';
import { OriginsService } from './origins.service';
import { BasicsComponent } from './basics/basics.component';
import { PersonaldecisionsComponent } from './personaldecisions/personaldecisions.component';
import { PersonaldecisionsService } from './personaldecisions.service';
import { LifeeventsComponent } from './lifeevents/lifeevents.component';
import { LifeeventsService } from './lifeevents.service';




@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    OriginsComponent,
    PersonaldecisionsComponent,
    LifeeventsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BasicsService, OriginsService, PersonaldecisionsService, LifeeventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
