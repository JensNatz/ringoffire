import { Component } from '@angular/core';



@Component({
  selector: 'app-dialog',
  standalone: true,
  template: `<h1 mat-dialog-title>Dialog</h1>
             <div mat-dialog-content>
               <p>Dies ist ein Beispiel-Dialog!</p>
             </div>
             <div mat-dialog-actions>
               <button mat-button mat-dialog-close>Schließen</button>
             </div>`,
})
export class DialogComponent {}
