import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Gato } from '../gatos';
import { GatosService } from '../gatos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-gato',
  templateUrl: './detalhe-gato.component.html',
  styleUrls: ['./detalhe-gato.component.css']
})
export class DetalheGatoComponent implements OnInit {


  public gatoId !: number;
  gato$!: Observable<Gato>;

  constructor(
    private gatoService: GatosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.gatoId = this.activatedRoute.snapshot.params.gatoId;
    this.gato$ = this.gatoService.buscarPeloID(this.gatoId);
  }
  curtir(){
    this.gatoService.curtir(this.gatoId).subscribe((curtida)=>{
      if(curtida){
        this.gato$ = this.gatoService.buscarPeloID(this.gatoId);
      }
    })
  }

  excluir(){
    this.gatoService.excluirGato(this.gatoId).subscribe(()=>{
      this.router.navigate(['/gatos/']);
    }, (error)=>{console.log(error)});
  }

}
