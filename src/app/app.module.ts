import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { GlobalSettings } from '@common/global.settings';
import { CommonServiceModule } from '@common/services/common-service.module';
import en from '@angular/common/locales/en';
import { AppRouting } from './app.routing';

registerLocaleData( en );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HammerModule,
    BrowserAnimationsModule,
    NzButtonModule,
    CommonServiceModule,
    AppRouting
  ],
  providers: [
    GlobalSettings,
    {
      provide: NZ_I18N,
      useValue: en_US
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
