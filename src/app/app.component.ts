import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@common/services';
import { GlobalSettings } from '@common/global.settings';
import { Theme } from '@common/models';

@Component({
  selector: 'app-root',
  template: `
    <section *ngIf="configLoaded">
      <p class="bg-primary-color">App components it's work!</p>
      <p class="bg-primary-color-300">a 300</p>
      <button class="btn bg-red-500" (click)="changeColorTheme()">
        Cambiar color primario
      </button>
    </section>
  `,
  styles: [],
})
export class AppComponent implements OnInit {

  public configLoaded: boolean = false;

  constructor(
    public global: GlobalSettings,
    private readonly themeService: ThemeService
  ) { }

  ngOnInit(): void {

    this.setTheme();

  }

  public setTheme(): void {

    const theme = new Theme(
      this.global.preferences.theme['primary-color'],
      this.global.preferences.theme['secondary-color'],
      this.global.preferences.theme['accent-color'],
    );

    this.configLoaded = this.themeService.setTheme( theme );

  }

  public changeColorTheme(): void {

    const theme = new Theme(
      '#303f9f', '#00695c', '#90caf9'
    );

    this.themeService.setTheme( theme );

  }

}
