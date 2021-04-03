export class Enum<T> {

   constructor(
      public readonly value: T
   ) { }

   public toString() {
      return String( this.value );
   }
}