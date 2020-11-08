import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Pattern } from './pattern';

export class PatternValidators {
    public static includeUppercase(control: AbstractControl): ValidationErrors | null {
        const { value } = control;
        return !Pattern.uppercase(value) ? { requiredUppercase: true } : null;
    }

    public static includeLowercase(control: AbstractControl): ValidationErrors | null {
        const { value } = control;
        return !Pattern.lowercase(value) ? { requiredLowercase: true } : null;
    }

    public static includeNumber(control: AbstractControl): ValidationErrors | null {
        const { value } = control;
        return !Pattern.number(value) ? { requiredNumber: true } : null;
    }
}
