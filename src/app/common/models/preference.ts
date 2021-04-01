import { SidebarOption, Theme } from "@common/models";

export class Preference {

   public fixedHeader: boolean;
   public fixedFooter: boolean;
   public fixedSidebar: boolean;
   public sidebar: SidebarOption;
   public pixelBase: number;
   public theme: Theme;

   constructor(
      fixedHeader: boolean,
      fixedFooter: boolean,
      fixedSidebar: boolean,
      sidebar: SidebarOption,
      pixelBase: number,
      theme: Theme
   ) {
      this.fixedHeader = fixedHeader,
      this.fixedFooter = fixedFooter,
      this.fixedSidebar = fixedSidebar,
      this.sidebar = sidebar,
      this.pixelBase = pixelBase,
      this.theme = theme;
   }

}