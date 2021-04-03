import { UserProfile } from "@auth/models";

export interface RegisterUser {

   firstName: string;
   secondName: string;
   surName: string;
   lastName: string;
   username: string;
   profile: UserProfile;

}