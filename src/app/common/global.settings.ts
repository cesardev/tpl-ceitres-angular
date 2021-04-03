import { Injectable } from "@angular/core";
import { LoggedInUser } from "@auth/models";
import { Preference } from "@common/models";

@Injectable()
export class GlobalSettings {

   public version!: string;
   public loggedInUser!: LoggedInUser;
   public preferences!: Preference;

}