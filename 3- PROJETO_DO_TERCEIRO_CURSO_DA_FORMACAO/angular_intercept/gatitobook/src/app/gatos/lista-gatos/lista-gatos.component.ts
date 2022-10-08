import { Component, OnInit } from '@angular/core';
import { Gatos } from '../gatos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-gatos',
  templateUrl: './lista-gatos.component.html',
  styleUrls: ['./lista-gatos.component.css'],
})
export class ListaGatosComponent implements OnInit {
  gatos!: Gatos;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param)=>{
      this.gatos = this.activatedRoute.snapshot.data['gatos'];
    })
  }
}
