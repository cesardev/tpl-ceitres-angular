import { SidebarOption, Theme } from "@common/models";

export interface Preference {

   version: string;
   fixedHeader: boolean;
   fixedFooter: boolean;
   fixedSidebar: boolean;
   sidebarOptions: SidebarOption;
   pixelBase: number;
   interfaceMode: string;
   theme: Theme;

}