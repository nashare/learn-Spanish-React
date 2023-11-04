export class User {
    isAuthenticated: boolean;

    constructor() {
        this.isAuthenticated = false;
    }

    signUp(email: string, password: string): void {
        this.isAuthenticated = true;
    }

    logIn(email: string, password: string): void {
        this.isAuthenticated = true;
    }

    logOut(): void{
        this.isAuthenticated = false;
    }

}

export const userClass = new User();