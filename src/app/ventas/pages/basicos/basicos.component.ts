import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'angela';
  nombreUpper: string = 'ANGELA';
  nombreCompleto: string = 'AnGeLa';
  fecha:Date = new Date(); // dia de hoy

}
