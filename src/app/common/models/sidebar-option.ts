export class SidebarOption {

   public type: string;
   public position: string;
   public open: boolean;

   constructor(
      type: string,
      position: string,
      open: boolean
   ) {
      this.type = type;
      this.position = position;
      this.open = open;
   }

}