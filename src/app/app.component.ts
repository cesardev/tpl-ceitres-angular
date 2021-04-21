import { Component, OnInit } from '@angular/core';
import { AppService } from '@common/services';
import { GlobalSettings } from '@common/global.settings';
import { BackendResponse } from '@common/models';

@Component({
  selector: 'app-root',
  template: `
    <section class="application {{ global.preferences.interfaceMode }}" *ngIf="configLoaded">
      <ng-container>
        <router-outlet></router-outlet>
      </ng-container>
    </section>
  `,
  styles: [],
})
export class AppComponent implements OnInit {

  public configLoaded!: boolean;

  constructor(
    public global: GlobalSettings,
    private readonly appService: AppService
  ) { }

  ngOnInit(): void {

    this.manageAppData();

  }

  /**
   * @author Ceitres company by César Gómez
   * @description
   *  Method that is responsible for consuming the global configuration
   *  of the application and set the theme
   * @return void
   */
  private manageAppData(): void {

    this.appService.manageAppData().subscribe(
      ( response: BackendResponse ) => {
        if ( response.success ) {
          /**
           * If the configuration is successful,
           * load all content of the application
           */
          this.configLoaded = true;
        }
      }
    );

  }

}
