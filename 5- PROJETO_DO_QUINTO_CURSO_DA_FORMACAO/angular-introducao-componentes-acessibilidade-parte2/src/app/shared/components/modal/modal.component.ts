import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalConfig } from './services/interface/modal-config';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public modalConfig: ModalConfig;

  constructor() { }

  ngOnInit(): void {
  }


}
