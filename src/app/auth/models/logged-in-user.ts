import { Preference } from "@common/models";

export interface LoggedInUser {

   firstName: string;
   secondName: string;
   surName: string;
   lastName: string;
   fullName: string;
   username: string;
   email: string;
   profile: string;
   token: string;
   preferences: Preference;

}