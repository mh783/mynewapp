export class Pais {
    id: number;
    name: string;
    idioma: string;
    image: string;
    capital: string;
    ano: string;
    des:string;
    constructor(id: number,
      name: string,
      idioma: string,
      image: string,
      capital: string,
      ano:string,des:string
    ){
        this.id = id;
        this.name = name;
        this.idioma = idioma;
        this.image = image;
        this.capital = capital;
        this.ano = ano;
        this.des = des;
      }
  }

