import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CityWidgetComponent } from './city-widget/city-widget.component';
import { SettingsComponent } from './settings/settings.component';

import { ApiService } from './services/api.service';

const routes: Routes = [
  { path: 'cities', component: CityWidgetComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CityWidgetComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
