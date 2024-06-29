import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BackDropService } from 'src/app/services/backdrop.service';
import { ModalService } from 'src/app/services/modal.service';
import { Dialog1Component } from '../dialog1/dialog1.component';
import { Dialog2Component } from '../dialog2/dialog2.component';
import {  takeUntil } from "rxjs/operators";
import { Subject } from 'rxjs';
import { DialogID } from 'src/app/core/constant';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.css']
})
export class DialogOverviewComponent implements  OnDestroy,OnInit {
  animal: string;
  name: string = 'Test';

  disableOpenDialog1: boolean = false;
  disableOpenDialog2: boolean = false;
  dialogRef1: MatDialogRef<Dialog1Component> | null;
  dialogRef2: MatDialogRef<Dialog2Component> | null;
  destroy$ = new Subject<void>();
  constructor(
    public dialog: MatDialog,
    private backdropService: BackDropService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.modalService.openedModal$
    .pipe(takeUntil(this.destroy$))
    .subscribe((openModals) => {
      this.disableOpenDialog1 = !!openModals.modals.find(modal => modal.id === DialogID.DIALOG1); 
      this.disableOpenDialog2 = !!openModals.modals.find(modal => modal.id === DialogID.DIALOG2); 
    })
  }

  openDialog1(): void {
    this.disableOpenDialog1 = true;
    // this.backdropService.showBackdrop();
    this.dialogRef1 = this.dialog.open(Dialog1Component, {
      disableClose: true,
      hasBackdrop: false,
      data: { name: this.name, animal: this.animal },
      closeOnNavigation: true,
    });

    this.dialogRef1.afterClosed().subscribe((result) => {
      // this.backdropService.hideBackDrop();
      this.disableOpenDialog1 = false;
      this.animal = result;
      this.dialogRef1 = null;
    });
  }

  openDialog2(): void {
    this.disableOpenDialog2 = true;
    // this.backdropService.showBackdrop();
    this.dialogRef2 = this.dialog.open(Dialog2Component, {
      disableClose: true,
      hasBackdrop: false,
      data: { name: this.name, animal: this.animal },
    });

    this.dialogRef2.afterClosed().subscribe((result) => {
      // this.backdropService.hideBackDrop();
      this.disableOpenDialog2 = false;
      this.animal = result;
      console.log('closed 2');
      this.dialogRef2 = null;
    });
  }

  ngOnDestroy() {
    // if (this.dialogRef1) {
    //   this.dialogRef1.close();
    // }

    // if (this.dialogRef2) {
    //   this.dialogRef2.close();
    // }

    // this.modalService.removeAll();
    this.destroy$.next();
    this.destroy$.complete();
  }
}

