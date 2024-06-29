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
    const updatedValue = [modal, ...currentValue];
    this.openedModal.next(updatedValue);
  }

  closeModal(id) {
    const filterModals = this.openedModal.value.filter(
      (exmodal) => exmodal.id !== id
    );

    this.openedModal.next(filterModals);
  }

  removeAll() {
    this.openedModal.next([]);
  }
}
