import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { OkDialogComponent } from './ok-dialog/ok-dialog.component';

const components = [OkDialogComponent];

@NgModule({
    declarations: [...components],
    imports: [CommonModule, MatDialogModule, MatButtonModule],
    exports: [...components],
})
export class DialogModule {}
