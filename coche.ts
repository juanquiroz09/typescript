class Coche {
  public color: string;
  public modelo: string;
  public velocidad: number = 0;

  public getColor(){
    return this.color;
  }

  public setColor(color: string){
    this.color = color;

  }
  public acelerar(){
    this.velocidad++;
  }
  public frenar(){
    this.velocidad--;
  }
  public getVelocidad():number{
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
console.log("El color del coche 1 es: " + coche.getColor());
console.log("El color del coche 1 es: " + coche.getVelocidad());
/*
coche_dos.setColor("Azul");
coche_tres.setColor("Verde");

console.log("El color del coche 2 es: " + coche_dos.getColor());
console.log("El color del coche 3 es: " + coche_tres.getColor());
*/