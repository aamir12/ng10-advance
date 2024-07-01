import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogID } from 'src/app/core/constant';
import { BackDropService } from 'src/app/services/backdrop.service';
import { ModalService } from 'src/app/services/modal.service';
import { DialogData } from 'src/app/types/dialog-data.interface';

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.css']
})
export class Dialog1Component {
  @HostBinding('class.isMinimize') isMinimize: boolean = false;
  title = 'Header Dialog 1';
  constructor(
    public dialogRef: MatDialogRef<Dialog1Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private backdropService: BackDropService,
    private modalService: ModalService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  minimize() {
    this.isMinimize = true;
    this.dialogRef.updatePosition({ bottom: '-100%', right: '0' });
    this.backdropService.hideBackDrop();

    const modal = {
      id: DialogID.DIALOG1,
      title: this.title,
      maximizeFn: this.maximize.bind(this),
      closeDialogFn: this.closeDialog.bind(this),
    };
    this.modalService.addModal(modal);
  }

  maximize() {
    this.backdropService.showBackdrop();
    this.isMinimize = false;
    this.dialogRef.updatePosition();
  }

  closeDialog() {
    this.dialogRef.close();
    this.modalService.closeModal(DialogID.DIALOG1);
  }
}