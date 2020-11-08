import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SignUpComponent } from './sign-up.component';
import { UserIdModule } from '../../shared/forms/user-id/user-id.module';
import { PasswordModule } from '../../shared/forms/password/password.module';
import { HeaderModule } from '../../shared/header/header.module';

@NgModule({
    declarations: [SignUpComponent],
    imports: [CommonModule, HeaderModule, UserIdModule, PasswordModule, MatButtonModule],
})
export class SignUpModule {}
