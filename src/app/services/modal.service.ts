import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class ModalService {
  
  private openedModal = new BehaviorSubject<any[]>([]);
  openedModal$ = this.openedModal.asObservable();
  addModal(modal: any) {
    const currentValue = this.openedModal.value;
    const isExist = currentValue.find((exmodal) => exmodal.id === modal.id);
    if (isExist) {
      return;
    }
    const modals = [modal, ...currentValue];
    this.openedModal.next(modals);
  }

  closeModal(id) {
    const currentValue = this.openedModal.value;
    const isExist = currentValue.find((exmodal) => exmodal.id === id);
    if (!isExist) {
      return;
    }
    const modals = currentValue.filter(
      (exmodal) => exmodal.id !== id
    );

    this.openedModal.next(modals);
  }

  removeAll() {
    this.openedModal.next([]);
  }
}
