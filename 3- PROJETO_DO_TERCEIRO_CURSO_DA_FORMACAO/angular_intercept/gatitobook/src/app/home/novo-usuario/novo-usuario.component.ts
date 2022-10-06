import { Component, OnInit } from '@angular/core';
import { NovoUsuarioService } from './novo-usuario.service';
import { NovoUsuario } from './novo-usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { minusculoValidator } from './minusculo.validator';
import { UsuarioExisteService } from './usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  constructor(
    private usuarioExistente: UsuarioExisteService,
    private novoUsuarioService: NovoUsuarioService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  novoUsuarioForm!: FormGroup;

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      fullName: ['',[Validators.required, Validators.minLength(4)]],
      userName:['',[minusculoValidator], [this.usuarioExistente.usuarioJaExiste()]],
      password:[''],
    },
    {
      validators: [usuarioSenhaIguaisValidator],
    });
  }

  cadastrarUmNovoUsuario(){
    if(this.novoUsuarioForm.valid){
      const novoUser = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService.cadastraUmNovoUsuario(novoUser).subscribe(()=>{
        this.router.navigate(['']);
      },(error)=>{
        console.log(error);
      });
    }
  }
}
