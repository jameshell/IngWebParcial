import { TipoCafe } from './TipoCafe';

export class Cafe {
    id: number;
    nombre: string;
    tipo: TipoCafe;
    region: string;
    imagen: string;
    sabor: string;
    altura: number;
    constructor(
      id: number,
      nombre: string,
      imagen: string,
      tipo: TipoCafe,
      region: string,
      sabor: string,
      altura: number
    ) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.region = region;
        this.imagen = imagen;
        this.sabor = sabor;
        this.altura = altura;
    }
}
