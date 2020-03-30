export class Student
{
    nombre: string;
    avatar: string;
    codigo: number;
    cedula: number;
    edad: number;
    direccion: string;
    telefono: number;
  
    constructor(nombre: string, avatar: string, codigo: number, cedula: number, edad:number, direccion: string, telefono: number) 
    {
        
      this.nombre=nombre;
      this.avatar=avatar;  
      this.codigo = codigo;
      this.cedula = cedula;
      this.edad=edad;
      this.direccion = direccion;
      this.telefono = telefono;
    }
}