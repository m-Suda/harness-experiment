import { ComponentHarness } from '@angular/cdk/testing';
import { MatButtonHarness } from '@angular/material/button/testing';

export class SignUpHarness extends ComponentHarness {
    static hostSelector = 'app-sign-up';

    private _signUpButton = this.locatorFor(
        MatButtonHarness.with({
            text: 'サインアップ',
        })
    );

    public async clickSignUpButton(): Promise<void> {
        const signUpButton = await this._signUpButton();
        await signUpButton.click();
    }

    public async isDisabledSignUpButton(): Promise<boolean> {
        const signUpButton = await this._signUpButton();
        return signUpButton.isDisabled();
    }
}
