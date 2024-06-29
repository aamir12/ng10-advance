import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogID } from 'src/app/core/constant';
import { BackDropService } from 'src/app/services/backdrop.service';
import { ModalService } from 'src/app/services/modal.service';
import { DialogData } from 'src/app/types/dialog-data.interface';

@Component({
  selector: 'app-dialog2',
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.css']
})
export class Dialog2Component {
  @HostBinding('class.isMinimize') isMinimize: boolean = false;
  
  title = 'Header Dialog 2';
  constructor(
    public dialogRef: MatDialogRef<Dialog2Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private backdropService: BackDropService,
    private modalService: ModalService
  ) {}

  // contentVisible: boolean = true;

  onNoClick(): void {
    this.dialogRef.close();
  }

  minimize() {
    this.isMinimize = true;
    // this.contentVisible = false;
    this.dialogRef.updatePosition({ bottom: '-100%', right: '25%' });

    // this.backdropService.hideBackDrop();

    const modal = {
      id: DialogID.DIALOG2,
      title: this.title,
      maximizeFn: this.maximize.bind(this),
      closeDialogFn: this.closeDialog.bind(this),
    };

    this.modalService.addModal(modal);
  }

  maximize() {
    // this.backdropService.showBackdrop();
    this.isMinimize = false;
    // this.contentVisible = true;
    this.dialogRef.updatePosition();
  }

  closeDialog() {
    this.dialogRef.close();
    this.modalService.closeModal(DialogID.DIALOG2);
  }
}
