import { Component, OnInit } from '@angular/core';
import { GlobalSettings } from '@common/global.settings';
import { Theme } from '@common/models';
import { ThemeService } from '@common/services';

const Variants: string[] = [
  '50', '100', '200', '300', '400',
  '500', '600', '700', '800', '900'
];
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public lstColors: { name: string, variants: string[] }[] = [
    { name: 'primary-color', variants: Variants },
    { name: 'secondary-color', variants: Variants },
    { name: 'accent-color', variants: Variants }
  ];
  private restorTheme!: Theme;

  constructor(
    private readonly global: GlobalSettings,
    private readonly themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.restorTheme = { ...this.global.preferences.theme };
  }

  public changeTheme( num: number ): void {

    const theme: Theme = {
      'primary-color': '',
      'secondary-color': '',
      'accent-color': '',
    }

    switch ( num ) {
      case 1:
        theme['primary-color'] = '#303f9f';
        theme['secondary-color'] = '#00695c';
        theme['accent-color'] = '#90caf9';
        break;
      case 2:
        theme['primary-color'] = '#d32f2f';
        theme['secondary-color'] = '#37474f';
        theme['accent-color'] = '#fbe9e7';
        break;
      case 3:
        theme['primary-color'] = '#558b2f';
        theme['secondary-color'] = '#ffa000';
        theme['accent-color'] = '#f50057';
        break;
      case 0:
        theme['primary-color'] = this.restorTheme['primary-color'];
        theme['secondary-color'] = this.restorTheme['secondary-color'];
        theme['accent-color'] = this.restorTheme['accent-color'];
        break;
    }

    this.themeService.setTheme( theme );

  }

}
