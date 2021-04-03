import { LoggedInUser } from "@auth/models";
import { Preference } from "@common/models";

export interface AppData {

   version: string;
   loggedInUser: LoggedInUser;
   preferences: Preference;

}