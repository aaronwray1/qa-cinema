import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: 'home', component: HomeComponent },
        { path: 'schedule', component: ScheduleComponent },

      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
