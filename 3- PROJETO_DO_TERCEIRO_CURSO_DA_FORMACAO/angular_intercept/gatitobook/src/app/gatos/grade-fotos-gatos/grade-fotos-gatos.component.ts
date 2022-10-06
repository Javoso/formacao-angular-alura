import { Component, Input, OnInit } from '@angular/core';
import { Gatos } from '../gatos';

@Component({
  selector: 'app-grade-fotos-gatos',
  templateUrl: './grade-fotos-gatos.component.html',
  styleUrls: ['./grade-fotos-gatos.component.css']
})
export class GradeFotosGatosComponent implements OnInit {

  @Input() gatos!: Gatos;

  constructor() { }

  ngOnInit(): void {
  }

}
