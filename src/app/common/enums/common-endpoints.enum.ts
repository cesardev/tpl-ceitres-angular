import { Enum } from "@common/models";

export class CommonEndpoints extends Enum<string> {

   public static readonly getAppData = new Enum('/app/app.json').toString();

}