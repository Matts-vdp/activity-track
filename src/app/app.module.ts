import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashItemComponent } from './dash-item/dash-item.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from '@iplab/ngx-color-picker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashItemComponent,
    NavigationComponent,
    ActivityListComponent,
    AddActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ColorPickerModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
