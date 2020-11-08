import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';

const components = [HeaderComponent];

@NgModule({
    declarations: [...components],
    imports: [CommonModule, MatToolbarModule],
    exports: [...components],
})
export class HeaderModule {}
