import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashItemComponent } from './dash-item/dash-item.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ActivityListComponent } from './activity-list/activity-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashItemComponent,
    NavigationComponent,
    ActivityListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
