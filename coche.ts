interface CocheBase{
  getModelo(): string;
  getVelocidad():number;
}
class Coche implements CocheBase {
  public color: string;
  public modelo: string;
  public velocidad: number;

  constructor(modelo: any = " ") {
    this.color = "Blanco";
    this.velocidad = 0;
    if (modelo = " ") {
      this.modelo = "BMW Generico";
    } else {
        this.modelo = modelo;
    }
  }
  
  getModelo(){
    return this.modelo;
  }
  setModelo(modelo: string){
    this.modelo = modelo;
  }

  public getColor() {
    return this.color;
  }

  public setColor(color: string) {
    this.color = color;
  }
  public acelerar() {
    this.velocidad++;
  }
  public frenar() {
    this.velocidad--;
  }
  public getVelocidad(): number {
    return this.velocidad;
  }
}

var coche = new Coche();
var coche_dos = new Coche();
var coche_tres = new Coche();

coche.setColor("Rojo");
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.setModelo("sub");
console.log("El modelo del coche 1 es: " + coche.getModelo());
console.log("El color del coche 1 es: " + coche.getColor());
console.log("La velocidad del coche 1 es: " + coche.getVelocidad());

coche.frenar();
console.log("El color del coche 1 es: " + coche.getVelocidad());

/*
coche_dos.setColor("Azul");
coche_tres.setColor("Verde");

console.log("El color del coche 2 es: " + coche_dos.getColor());
console.log("El color del coche 3 es: " + coche_tres.getColor());
*/
