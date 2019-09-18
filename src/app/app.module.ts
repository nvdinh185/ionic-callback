import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DynamicFormWebPage } from '../pages/dynamic-form-web/dynamic-form-web';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DynamicFormWebPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DynamicFormWebPage
  ],
  providers: []
})
export class AppModule {}