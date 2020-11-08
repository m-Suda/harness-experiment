import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

const components = [PasswordComponent];

@NgModule({
    declarations: [...components],
    imports: [CommonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
    exports: [...components],
})
export class PasswordModule {}
