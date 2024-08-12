export class AuthModel {
    public email!: string;
    public password!: string;

    constructor(init?: Partial<AuthModel>) {
        Object.assign(this, init);
    }
}