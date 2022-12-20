
export class Contacto{
    _id?: number;
    public nombre: String;
    public whatsapp: Number;
    public email : String;
    public mensaje: String;


    constructor(nombre: String, whatsapp:Number, email:String, mensaje: String){
this.nombre=nombre;
this.whatsapp=whatsapp;
this.email=email;
this.mensaje=mensaje;

    }
}