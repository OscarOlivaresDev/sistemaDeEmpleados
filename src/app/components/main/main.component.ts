import { Component } from '@angular/core';
import { Empleados } from 'src/app/models/empleados';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  nuevoEmpleado : Empleados = {
    id: 0,
    name : "",
    country : ""
  }

  empleadosArray: Empleados[] = [
    {
      id: 1,
      name: "Andres",
      country: "Colombia"
    },
    {
      id: 2,
      name: "Diego",
      country: "Colombia"
    },
    {
      id: 3,
      name: "Lucas",
      country: "Argentina"
    }
  ]

  agregarEmpleado(){

    if(this.nuevoEmpleado.id === 0){
      this.nuevoEmpleado.id = this.empleadosArray.length + 1;
      this.empleadosArray.push(this.nuevoEmpleado);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usted ha agregado un nuevo empleado',
        showConfirmButton: false,
        timer: 1500
      })
    }

    // Limpiar los inputs de entrada.
    this.nuevoEmpleado = {
      id: 0,
      name : "",
      country : ""
    }
  }

  editarEmpleado(empleado : Empleados){
    this.nuevoEmpleado = empleado;
  }

  eliminarEmpleado(){
    Swal.fire({
      title: 'Estás seguro?',
      text: "No podrás verlo nuevamente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.empleadosArray = this.empleadosArray.filter(x => x != this.nuevoEmpleado);
        this.nuevoEmpleado = {
          id: 0,
          name : "",
          country : ""
        }
        Swal.fire(
          'Eliminado!',
          'El empleado ha sido eliminado correctamente',
          'success'
        )
      }
    })
  }
}