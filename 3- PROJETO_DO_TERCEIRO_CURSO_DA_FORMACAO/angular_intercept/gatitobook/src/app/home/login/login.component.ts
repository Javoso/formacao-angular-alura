import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: string = "";
  public senha: string = "";

  constructor(
    private service: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  login() {
    this.service.autenticar(this.user, this.senha).subscribe(() => {
      this.router.navigate(['gatos'])
    }, (error)=>{
      alert('Usuário ou senha inválido');
      console.log(error);
    }
    );
  }

}
