import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export type OkDialogComponentData = {
    title: string;
    content: string;
    buttonText?: string;
};

@Component({
    selector: 'app-ok-dialog',
    templateUrl: './ok-dialog.component.html',
    styleUrls: ['./ok-dialog.component.scss'],
})
export class OkDialogComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public data: OkDialogComponentData) {
        const { buttonText } = data;
        this.data = { ...data, buttonText: buttonText ?? 'OK' };
    }

    ngOnInit(): void {}
}
