export class User {
  constructor(
    public _id: string,
    public nombre: string,
    public apellido: string,
    public edad: number,
    public fecha: Date
  ) { }
}
