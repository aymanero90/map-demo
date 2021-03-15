import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCyW8MP6YiCx5qHfm_hvTJQwErx5Ko3-Go'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
