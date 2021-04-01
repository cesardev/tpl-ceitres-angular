export class Theme {

   public 'primary-color': string;
   public 'secondary-color': string;
   public 'accent-color': string;

   constructor(
      primaryColor: string,
      secondaryColor: string,
      accentColor: string
   ) {
      this['primary-color'] = primaryColor;
      this['secondary-color'] = secondaryColor;
      this['accent-color'] = accentColor;
   }
}