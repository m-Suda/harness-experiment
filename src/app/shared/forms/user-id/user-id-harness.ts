import { ComponentHarness } from '@angular/cdk/testing';
import { MatFormFieldHarness } from '@angular/material/form-field/testing';
import { MatInputHarness } from '@angular/material/input/testing';

export class UserIdHarness extends ComponentHarness {
    static hostSelector = 'app-user-id';

    private _matFormField = this.locatorFor(MatFormFieldHarness);
    private _matInput = this.locatorFor(MatInputHarness);

    public async inputValud(): Promise<string> {
        const matInput = await this._matInput();
        return matInput.getValue();
    }

    public async input(userId: string): Promise<void> {
        if (userId == null) return;
        const matInput = await this._matInput();
        await matInput.focus();
        await Promise.all([...userId].map((v) => matInput.setValue(v)));
        await matInput.blur();
    }

    public async paste(userId: string): Promise<void> {
        if (userId == null) return;
        const matInput = await this._matInput();
        await matInput.focus();
        await matInput.setValue(userId);
        await matInput.blur();
    }

    public async isErrorDisplayed(errorMessages: string[]): Promise<boolean> {
        const matFormField = await this._matFormField();
        const errors = await matFormField.getTextErrors();
        return errors.every((e) => errorMessages.includes(e));
    }

    public async isErrorNotDisplayed(): Promise<boolean> {
        const matFormField = await this._matFormField();
        const errors = await matFormField.getTextErrors();
        return !errors.length;
    }
}
