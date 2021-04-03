import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ThemeService, AppService } from '@common/services';
import { ErrorInterceptor, RequestInterceptor } from '@common/interceptors';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ThemeService,
    AppService,
    ErrorInterceptor,
    RequestInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ]
})
export class CommonServiceModule { }
