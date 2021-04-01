import { Injectable } from '@angular/core';
import { GlobalSettings } from '@common/global.settings';
import { ColorPalette, Theme } from '@common/models';
import * as tinycolor from 'tinycolor2';

@Injectable({ providedIn: 'root' })
export class ThemeService {

  constructor(
    private global: GlobalSettings
  ) { }

  public setTheme( theme: Theme ): boolean {

    const documentElement = window.document.documentElement;

    try {

      for ( const [ name, color ] of Object.entries( theme ) ) {
  
        const palettes = this.computeColorPalette( color );
  
        for ( const palette of palettes ) {
          documentElement.style.setProperty(
            `--${name}-${palette.variant}`, palette.hex
          );
        }
  
      }

    } catch (error) {

      return false;

    }

    this.global.preferences.theme['primary-color'] = theme['primary-color'];
    this.global.preferences.theme['secondary-color'] = theme['secondary-color'];
    this.global.preferences.theme['accent-color'] = theme['accent-color'];

    return true;

  }

  private computeColorPalette( hex: string ): ColorPalette[] {

    return [
      this.getColorObject( tinycolor( hex ).lighten( 45 ), '50' ),
      this.getColorObject( tinycolor( hex ).lighten( 40 ), '100' ),
      this.getColorObject( tinycolor( hex ).lighten( 30 ), '200' ),
      this.getColorObject( tinycolor( hex ).lighten( 20 ), '300' ),
      this.getColorObject( tinycolor( hex ).lighten( 10 ), '400' ),
      this.getColorObject( tinycolor( hex ), '500' ),
      this.getColorObject( tinycolor( hex ).darken( 10 ), '600' ),
      this.getColorObject( tinycolor( hex ).darken( 20 ), '700' ),
      this.getColorObject( tinycolor( hex ).darken( 30 ), '800' ),
      this.getColorObject( tinycolor( hex ).darken( 40 ), '900' ),
    ];

  }

  private getColorObject( value: tinycolor.Instance, variant: string ): ColorPalette {

    const color = tinycolor( value );

    return {
      variant,
      hex: color.toHexString(),
      darkContrast: color.isLight(),
    };

  }

}
