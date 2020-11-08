import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseForm } from '../base-form';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.scss'],
})
export class PasswordComponent extends BaseForm implements OnInit {
    @Input() form = new FormControl();

    constructor() {
        super();
    }

    ngOnInit(): void {}
}
