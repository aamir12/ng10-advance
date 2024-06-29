import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IModal {
  closetype: 'ALL' | 'SINGLE' | 'NONE';
  modals: any[];
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  defaultValue:IModal = {
    closetype: 'NONE',
    modals:[]
  }
  private openedModal = new BehaviorSubject<IModal>(this.defaultValue);
  openedModal$ = this.openedModal.asObservable();
  addModal(modal: any) {
    const currentValue = this.openedModal.value;
    const isExist = currentValue.modals.find((exmodal) => exmodal.id === modal.id);
    if (isExist) {
      return;
    }
    const modals = [modal, ...currentValue.modals];
    this.openedModal.next({...currentValue,modals});
  }

  closeModal(id) {
    const currentValue = this.openedModal.value;
    const isExist = currentValue.modals.find((exmodal) => exmodal.id === id);
    if (!isExist) {
      return;
    }
    const modals = currentValue.modals.filter(
      (exmodal) => exmodal.id !== id
    );

    this.openedModal.next({...this.openedModal.value , modals});
  }

  removeAll() {
    this.openedModal.next(this.defaultValue);
  }
}
