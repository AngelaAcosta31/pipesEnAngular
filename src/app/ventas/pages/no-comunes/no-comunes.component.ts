import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'angela';
  genero: string = 'femenino';

  invitacionMapa={
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }
  //i18nPlural
  clientes: string[] = ['Maria', 'Juan','Pedro','Camila','Alejandro'];

  clientesMapa={

    '=0':'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'

  };

  cambiarCliente(){

    if(this.nombre.match('angela')){

      this.nombre = 'David';
      this.genero = 'masculino';
    }else{
      this.nombre = 'angela';
      this.genero = 'femenino';
    }



  }

  borrarCliente(){
    this.clientes.pop();
  }

  //keyValue pipe

  persona={
    nombre: 'Angela',
    edad: 21,
    ubicacion:'Cali-Colombia'
  }

  //json Pipe
  heroes=[
   {
     nombre:'SuperMan',
     vuela:true,
    },
    {
      nombre:'SpiderMan',
      vuela:true,
     },
     {
      nombre:'Robin',
      vuela:false,
     },
     {
      nombre:'Mujer Maravilla',
      vuela:true,
     },
     {
      nombre:'Aquaman',
      vuela:false,
     },
]

  //async pipe
  miObservable = interval(2000); //0,1,2,3
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve('data de promesa')
    },3500)
  });
}
