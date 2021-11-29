import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarBoxComponent } from './calendar-box/calendar-box.component';

const routes: Routes = [
  // { path: 'calendar/:year-month', component: CalendarBoxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
