export class Pattern {
    private static readonly UPPER_CASE = /[A-Z]/;
    private static readonly LOWER_CASE = /[a-z]/;
    private static readonly NUMBER = /\d/;

    public static uppercase(s: string | null): boolean {
        if (!s) return true;
        return this.UPPER_CASE.test(s);
    }

    public static lowercase(s: string | null): boolean {
        if (!s) return true;
        return this.LOWER_CASE.test(s);
    }

    public static number(s: string | null): boolean {
        if (!s) return true;
        return this.NUMBER.test(s);
    }
}
