import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { TreeModule } from 'primeng/tree';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    TreeModule,
    CardModule,
    ProgressSpinnerModule,
    DialogModule,
    ConfirmDialogModule,
    SplitterModule,
  ],
  exports: [
    ButtonModule,
    TreeModule,
    CardModule,
    ProgressSpinnerModule,
    DialogModule,
    ConfirmDialogModule,
    SplitterModule,
  ],
})
export class PrimengModule { }
