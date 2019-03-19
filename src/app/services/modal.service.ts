import { Injectable } from '@angular/core';
import { DomService } from './dom.service';

@Injectable()
export class ModalService {

  constructor(private domService: DomService) {}

  private modalElementId = 'modal-container';
  private overlayElementId = 'overlay';

  init(component: any, inputs: object, outputs: object): any {
    let componentConfig = {
      inputs:inputs,
      outputs:outputs
    }
    const componentRef = this.domService.appendComponentTo(this.modalElementId, component, componentConfig);
    document.getElementById(this.modalElementId).className = 'show';
    document.getElementById(this.overlayElementId).className = 'show';

    return componentRef;
  }

  destroy() {
    this.domService.removeComponent();
    document.getElementById(this.modalElementId).className = 'hidden';
    document.getElementById(this.overlayElementId).className = 'hidden';
  }
}