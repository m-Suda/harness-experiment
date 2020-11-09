import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up.component';
import { SignUpModule } from './sign-up.module';
import { SignUpHarness } from './sign-up-harness';
import { UserIdHarness } from '../../shared/forms/user-id/user-id-harness';
import { PasswordHarness } from '../../shared/forms/password/password-harness';

describe('SignUpComponent', () => {
    let fixture: ComponentFixture<SignUpComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SignUpModule, BrowserAnimationsModule],
        }).compileComponents();
    });

    describe('UIの状態テスト', () => {
        let signUpHarness: SignUpHarness;
        let userIdHarness: UserIdHarness;
        let passwordHarness: PasswordHarness;

        beforeEach(async () => {
            fixture = TestBed.createComponent(SignUpComponent);
            signUpHarness = await TestbedHarnessEnvironment.harnessForFixture(
                fixture,
                SignUpHarness
            );
            const loader = TestbedHarnessEnvironment.loader(fixture);
            userIdHarness = await loader.getHarness(UserIdHarness);
            passwordHarness = await loader.getHarness(PasswordHarness);
        });

        test('UserId → Passwordの順で正しいものを入力したときボタンが活性', async () => {
            await userIdHarness.input('user-a');
            await passwordHarness.input('Passw0rd');

            expect(await userIdHarness.isErrorNotDisplayed()).toBeTruthy();
            expect(await passwordHarness.isErrorNotDisplayed()).toBeTruthy();
            expect(await signUpHarness.isDisabledSignUpButton()).toBeFalsy();
        });
    });
});
