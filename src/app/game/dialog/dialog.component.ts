import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogModule
} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    DialogComponent,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  readonly dialogRef = inject(MatDialogRef<DialogComponent>);

  name: string = '';

  onNoClick(): void {
    this.dialogRef.close();
  }

}


