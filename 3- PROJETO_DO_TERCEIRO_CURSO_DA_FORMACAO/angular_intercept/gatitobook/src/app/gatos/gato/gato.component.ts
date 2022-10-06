import { environment } from './../../../environments/environment.prod';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gato',
  templateUrl: './gato.component.html',
  styleUrls: ['./gato.component.css']
})
export class GatoComponent implements OnInit {

  private urlOriginal = '';
  @Input() descricao = '';

  @Input() set url(url:string){
    if(url.startsWith('data')){
      this.urlOriginal = url;
    } else {
      this.urlOriginal = `${environment.apiUrl}/imgs/${url}`;
    }
  }

  get url():string {
    return this.urlOriginal;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
