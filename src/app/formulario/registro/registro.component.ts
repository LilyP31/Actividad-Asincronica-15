import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  estudiantes = [{nombre: 'Juan', apellidos: 'Perez', carrera: 'Ingeniería'}, {nombre: 'Maria', apellidos: 'Gonzalez', carrera: 'Derecho'}];
  nuevoEstudiante = {nombre: '', apellidos: '', carrera: ''};

  insertarDatos() {
    this.estudiantes.push(this.nuevoEstudiante);
    this.nuevoEstudiante = {nombre: '', apellidos: '', carrera: ''};
  }
  
  
  eliminarEstudiante(estudiante:any) {
    if(confirm('¿Está seguro de eliminar al estudiante?')) {
      this.estudiantes = this.estudiantes.filter(e => e !== estudiante);
    }
  }

    onClear(){
      this.nuevoEstudiante = {nombre: '', apellidos: '', carrera: ''};
      
    }
}
