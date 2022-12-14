module Tienda {
  class Ropa{
    constructor(public titulo: string){
      alert(titulo)
    }
  }
  export class Informatica{
    constructor(public titulo: string){
      alert('Tienda de Tecnología: ' + titulo);
    }
  }
}
import Informatica = Tienda.Informatica;
let cargar_iinformatica = new Informatica('supertienda');
/*
function arranque(lanzar: string) {
  return function (target: Function) {
    target.prototype.saludo = function (): void {
      console.log(lanzar);
    };
  };
}
@arranque("Lanzamineto del curso Nodejs y Angular")
*/
class Programa {
  public nombre: string;
  public version: number;

  getNombre() {
    return this.nombre;
  }
  setNombre(nombre: string) {
    this.nombre = nombre;
  }
  getVersion() {
    return this.version;
  }
  setVersion(version: number) {
    this.version = version;
  }
}
/*
var programa = new Programa();
(programa as any).lanzamiento();
*/
class EditorVideo extends Programa {
  public timeline: number;
  setTimeline(timeline: number) {
    this.timeline = timeline;
  }
  getTimeline() {
    return this.timeline;
  }
  getAllData(): string {
    return (
      this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeline()
    );
  }
}
var editor = new EditorVideo();
editor.setNombre("Camtasia Studio");
editor.setVersion(8);
editor.setTimeline(4000);

console.log(editor.getAllData());
//Logica del formulario
var programas = [] as any;
function guardar() {
  var nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
  var programa = new Programa();
  programa.setNombre(nombre);
  programa.setVersion(1);
  programas.push(programa);

  var list = "";
  for (let i = 0; i < programas.length - 1; i++) {
    list = list + "<li>" + programas[i].getNombre() + "</li>";
  }
  var listado = <HTMLInputElement>document.getElementById("listado");
  listado.innerHTML = list;
}
