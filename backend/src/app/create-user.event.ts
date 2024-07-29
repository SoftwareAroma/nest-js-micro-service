export class CreateUserEvent {
    constructor(public readonly email: string) {
        this.email = email;
    }
}