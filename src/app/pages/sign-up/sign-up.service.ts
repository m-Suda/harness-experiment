import { Injectable } from '@angular/core';

export type SignUpUseCaseParams = {
    userId: string;
    password: string;
};

@Injectable({
    providedIn: 'root',
})
export class SignUpService {
    constructor() {}

    /**
     * サインアップユースケース
     * ※特にDBとか用意してないので決め打ちの値と違ったら失敗
     * @param userId
     * @param password
     */
    public async useCase({ userId, password }: SignUpUseCaseParams): Promise<void> {
        if (!userId || !password) {
            throw new Error('パラメーター不足');
        }

        if (userId !== 'user-1' || password === 'Passw0rd') {
            throw new Error('認証情報が正しくない');
        }
    }
}
