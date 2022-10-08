import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { GatosService } from '../gatos.service';

@Component({
  selector: 'app-novo-gato',
  templateUrl: './novo-gato.component.html',
  styleUrls: ['./novo-gato.component.css'],
})
export class NovoGatoComponent implements OnInit {
  gatoFormulario!: FormGroup;
  file!: File;
  preview!: string;
  percentualConcluido = 0;

  constructor(
    private gatoService: GatosService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.gatoFormulario = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  upload() {
    const allowComments =
      this.gatoFormulario.get('allowComments')?.value ?? false;
    const description = this.gatoFormulario.get('description')?.value ?? '';

    this.gatoService
      .upload(description, allowComments, this.file)
      .pipe(finalize(() => this.router.navigate(['gatos'])))
      .subscribe(
        (event: HttpEvent<any>) => {
          if (event.type === HttpEventType.UploadProgress) {
            const total = event.total ?? 1;
            this.percentualConcluido = Math.round(100 * (event.loaded / total));
          }
        },
        (error) => console.log(error)
      );
  }

  gravaArquivo(arquivo: any): void {
    const [file] = arquivo?.files;
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(file);
  }
}
