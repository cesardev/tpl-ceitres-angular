import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonEndpoints } from '@common/enums';
import { GlobalSettings } from '@common/global.settings';
import { AppData, BackendResponse, Theme } from '@common/models';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ThemeService } from '@common/services/theme.service';

@Injectable({ providedIn: 'root' })
export class AppService {

  private readonly UrlJson: string = `${environment.urlJson}`;

  constructor(
    private readonly http: HttpClient,
    private readonly themeService: ThemeService,
    private global: GlobalSettings
  ) { }

  /**
   * @author Ceitres company by César Gómez
   * @description
   *  Servicio para obtener y asignar la personalización de la aplicación a las variables
   *  globales que corresponden a cada dato
   * @return Observable<BackendResponse>
   */
  public manageAppData(): Observable<BackendResponse> {
    return this.http.get<BackendResponse>(`${this.UrlJson}${CommonEndpoints.getAppData}`).pipe(
      map(
        ( response: BackendResponse ) => {

          if ( response.success ) {

            const appData = ( response.data as AppData );

            const theme = new Theme(
              appData.preferences.theme['primary-color'],
              appData.preferences.theme['secondary-color'],
              appData.preferences.theme['accent-color'],
            );

            this.global.version = appData.version;
            this.global.loggedInUser = appData.loggedInUser;
            this.global.preferences = appData.preferences;

            this.themeService.setTheme( theme );

          }

          return response;
        }
      )
    );
  }

}
