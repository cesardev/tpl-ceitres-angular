export class Theme {

   'primary-color': string;
   'secondary-color': string;
   'accent-color': string;

   constructor(
      primaryColor: string,
      secondaryColor: string,
      accentColor: string
   ) {
      this["primary-color"] = primaryColor;
      this["secondary-color"] = secondaryColor;
      this["accent-color"] = accentColor;
   }

}