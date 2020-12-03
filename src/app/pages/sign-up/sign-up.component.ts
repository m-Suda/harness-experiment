import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PatternValidators } from '../../lib/validators/pattern-validators';
import {
    OkDialogComponent,
    OkDialogComponentData,
} from '../../shared/dialog/ok-dialog/ok-dialog.component';
import { SignUpService, SignUpUseCaseParams } from './sign-up.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
    /**
     * UserId
     * - 必須である
     * - 最大文字数は14字
     */
    public userIdForm = new FormControl(null, [Validators.required, Validators.maxLength(14)]);

    /**
     * Password
     * - 必須である
     * - 8文字以上
     * - 大文字小文字の英字 + 数字が最低1つ以上必要
     */
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

    constructor(private _dialog: MatDialog, private _signUp: SignUpService) {}

    ngOnInit(): void {}

    /**
     * サインアップする
     */
    public async signUp(): Promise<void> {
        const params = this.formGroup.getRawValue() as SignUpUseCaseParams;
        try {
            await this._signUp.useCase(params);
            this._openDialog({ title: '成功', content: 'サインアップに成功しました！' });
        } catch (e) {
            this._openDialog({ title: '失敗', content: 'サインアップに失敗しました。' });
        }
    }

    /**
     * ダイアログを開く
     * @param data
     * @private
     */
    private _openDialog(data: OkDialogComponentData) {
        this._dialog.open(OkDialogComponent, { data });
    }
}
