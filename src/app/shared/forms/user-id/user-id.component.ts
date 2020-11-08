import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseForm } from '../base-form';

@Component({
    selector: 'app-user-id',
    templateUrl: './user-id.component.html',
    styleUrls: ['./user-id.component.scss'],
})
export class UserIdComponent extends BaseForm implements OnInit {
    @Input() form = new FormControl();

    constructor() {
        super();
    }

    ngOnInit(): void {}
}
