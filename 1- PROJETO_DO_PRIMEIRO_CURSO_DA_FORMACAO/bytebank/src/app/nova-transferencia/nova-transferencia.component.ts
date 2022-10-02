import { Component, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  constructor(private service: TransferenciaService, private router: Router) {}

  ngOnInit(): void {}

  public valor: number;
  public destino: string;
  private rota = "extrato";

  public transferir() {
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adicionarTransferencia(valorEmitir).subscribe(
      (result) => {
        console.log(result);
        this.limparFormulario();
        this.router.navigateByUrl(this.rota);
      },
      (error) => console.log(error)
    );
  }

  private limparFormulario(): void {
    this.destino = '';
    this.valor = 0;
  }
}
