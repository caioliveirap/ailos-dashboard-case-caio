import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss'],
})
export class AlertModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  @Input() title: string = this.data.title;
  @Input() complementaryText: string = this.data.complementaryText;

  onClose(): void {
    console.log('rest');
    // this.dialogRef.~();
  }
}
