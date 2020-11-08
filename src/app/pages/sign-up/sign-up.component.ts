import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatternValidators } from '../../lib/validators/pattern-validators';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
    public userIdForm = new FormControl(null, [Validators.required, Validators.maxLength(14)]);
    public passwordForm = new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        PatternValidators.includeUppercase,
        PatternValidators.includeLowercase,
        PatternValidators.includeNumber,
    ]);
    public formGroup = new FormGroup({
        userId: this.userIdForm,
        password: this.passwordForm,
    });

    constructor() {}

    ngOnInit(): void {}

    public signUp() {
        console.log(this.formGroup.getRawValue());
    }
}
