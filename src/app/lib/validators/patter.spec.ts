import { Pattern } from './pattern';

describe('Patter Class Test', () => {
    describe('uppercase()', () => {
        test('値がnull', () => {
            expect(Pattern.uppercase(null)).toBeTruthy();
        });
        test('値に大文字英字が含まれる', () => {
            expect(Pattern.uppercase('abcA123')).toBeTruthy();
        });
        test('値に大文字英字が含まれない', () => {
            expect(Pattern.uppercase('abc123')).toBeFalsy();
        });
    });
    describe('lowercase()', () => {
        test('値がnull', () => {
            expect(Pattern.lowercase(null)).toBeTruthy();
        });
        test('値に小文字英字が含まれる', () => {
            expect(Pattern.lowercase('aBC123')).toBeTruthy();
        });
        test('値に小文字英字が含まれない', () => {
            expect(Pattern.lowercase('ABC123')).toBeFalsy();
        });
    });
    describe('number()', () => {
        test('値がnull', () => {
            expect(Pattern.number(null)).toBeTruthy();
        });
        test('値に数字が含まれる', () => {
            expect(Pattern.number('2abcABC1')).toBeTruthy();
        });
        test('値に数字が含まれない', () => {
            expect(Pattern.number('abcABC')).toBeFalsy();
        });
    });
});
