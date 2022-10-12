import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalRef } from './shared/components/modal/models/model-ref';
import { ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  title ='Angular - Accessibility';

  public firstName: string = 'Lucas';
  public surName: string = 'Nascimento';
  public age: number = 25;
  public modalRef: ModalRef;
  public info: boolean = false;
  public form: FormGroup;

  constructor(private modalService: ModalService, private formBuilder: FormBuilder) {}
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName : ['', Validators.required],
      surName : ['', Validators.required],
      age : ['', Validators.required], 
      info : [false]
    });
  }

  public show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details',
    });
  }

  public submit():void {
    if(this.form.invalid){
      return;
    }
    console.log(this.form.value);
    this.modalRef.close();
  }
}
