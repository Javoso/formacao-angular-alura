import { Component, HostBinding, OnInit, TemplateRef } from '@angular/core';
import { fade } from '../../animations/fade';
import { ModalRef } from './models/model-ref';
import { ModalConfig } from './services/interface/modal-config';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations:[fade]
})
export class ModalComponent implements OnInit {

  @HostBinding('@fade') fade = true;
  public modalConfig: ModalConfig;
  public modalRef: ModalRef;

  constructor() { }

  ngOnInit(): void {
  }


}
