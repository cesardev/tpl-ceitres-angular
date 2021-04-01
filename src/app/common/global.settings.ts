import { Injectable } from "@angular/core";
import { Preference, SidebarOption, Theme } from "@common/models";

@Injectable()
export class GlobalSettings {

   public version: string;
   public preferences: Preference;

   constructor() {

      this.version = '0.0.1';
      this.preferences = new Preference(
         true,
         false,
         true,
         new SidebarOption(
            'normal',
            'vertical',
            true
         ),
         14,
         new Theme(
            '#00838f',
            '#37474f',
            '#ffd740'
         )
      );

   }
}