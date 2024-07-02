import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-dailog-tray',
  templateUrl: './dailog-tray.component.html',
  styleUrls: ['./dailog-tray.component.css']
})
export class DailogTrayComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  minimizeModals: any[] = [];
  ngOnInit() {
    this.modalService.openedModal$.subscribe((openModals) => {
      this.minimizeModals = openModals;
    });
  }

  openModal(modal) {
    modal.maximizeFn();
    // this.modalService.closeModal(modal);
  }

  closeModal(modal) {
    modal.closeDialogFn();
  }
}
