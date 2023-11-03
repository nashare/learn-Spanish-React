export class User {
    isAuthenticated: boolean;

    constructor() {
        this.isAuthenticated = false;
    }

    logIn(): void {
        this.isAuthenticated = true;
    }

    logOut(): void {
        this.isAuthenticated = false;
    }

}

export const userClass = new User();