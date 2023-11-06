export class User {
    private _isAuthenticated: boolean = false;

    get isAuthenticated(): boolean {
        return this._isAuthenticated;
    }

    signUp(email: string, password: string): void {
        console.log("signed up");
        this._isAuthenticated = true;
    }

    logIn(email: string, password: string): void {
        console.log("loggin in");
        this._isAuthenticated = true;
    }

    logOut(setIsAuthenticated: (authState: boolean) => void): void {
        this._isAuthenticated = false;
        setIsAuthenticated(this._isAuthenticated);
    }

}

export const userInst = new User();