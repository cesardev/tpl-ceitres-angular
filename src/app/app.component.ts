import { Component, OnInit } from '@angular/core';
import { AppService } from '@common/services';
import { GlobalSettings } from '@common/global.settings';
import { BackendResponse } from '@common/models';

@Component({
  selector: 'app-root',
  template: `
    <section *ngIf="configLoaded">
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

  private manageAppData(): void {

    this.appService.manageAppData().subscribe(
      ( response: BackendResponse ) => {
        if ( response.success ) {
          this.configLoaded = true;
        }
      }
    );

  }

}
