import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { UserIdComponent } from './user-id.component';

const components = [UserIdComponent];

@NgModule({
    declarations: [...components],
    imports: [CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
    exports: [...components],
})
export class UserIdModule {}
