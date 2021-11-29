import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarBoxComponent } from './calendar-box/calendar-box.component';
import { WeekComponent } from './calendar-box/week/week.component';
import { DaysComponent } from './calendar-box/days/days.component';
import { HeaderComponent } from './calendar-box/header/header.component';
import { InputComponent } from './calendar-box/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CalendarBoxComponent,
    WeekComponent,
    DaysComponent,
    HeaderComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
