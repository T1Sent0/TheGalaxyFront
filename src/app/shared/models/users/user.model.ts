export class User {
    public id!: string;
    public firstName!: string;
    public lastName!: string;
    public middleName!: string;
    public email!: string;
    public isEdit!: boolean;
    public carNumber!: string;

    constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }

    public getDisplayName(): string {
        return `${this.lastName} ${this.firstName} ${this.middleName}`;
    }
}