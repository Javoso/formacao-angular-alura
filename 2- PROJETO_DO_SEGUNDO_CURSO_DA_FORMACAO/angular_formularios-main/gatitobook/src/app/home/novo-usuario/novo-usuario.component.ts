import { Component, OnInit } from '@angular/core';
import { NovoUsuarioService } from './novo-usuario.service';
import { NovoUsuario } from './novo-usuario';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  constructor(private novoUsuarioService: NovoUsuarioService, private formBuilder: FormBuilder) { }

  novoUsuarioForm!: FormGroup;

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: [''],
      fullName: [''],
      userName:[''],
      password:[''],
    });
  }

  cadastrarUmNovoUsuario(){
    const novoUser = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(novoUser);

    //this.novoUsuarioService.cadastraUmNovoUsuario(this.novoUsuarioForm.getRawValue() as NovoUsuario);
  }
}
