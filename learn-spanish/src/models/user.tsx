import { UserClient } from "./UserClient";

export class User {
    private _isAuthenticated: boolean = false;
    private _categories: string[]|null = null;
    private _userId: number|null = null;
                                                                                                                                                                   
    get isAuthenticated(): boolean {
        return this._isAuthenticated;
    }
    async signUp(email: string, password: string) {
        const result = await UserClient.post(email, password);
        console.log(result);
        this._isAuthenticated = true;
    }

    async logIn(email: string, password: string, 
        setErrorMessage: (authState: string) => void,
        setIsAuthenticated: (authState: boolean) => void) {
        const result = await UserClient.get(email, password);
        if (result.length > 0) {
            this._categories = result['categories'];
            this._userId = result['id'];
            this._isAuthenticated = true;
            setErrorMessage('');
            setIsAuthenticated(this._isAuthenticated);
        } else {
            setErrorMessage('Invalid login credentials. Please try again.');
        }
    }

    async updateCategories() {
        const result = await UserClient.patch(this._categories, this._userId);
        console.log(result);
        this._isAuthenticated = true;
    }

    logOut(setIsAuthenticated: (authState: boolean) => void): void {
        this._isAuthenticated = false;
        this._categories = null;
        this._userId = null;
        setIsAuthenticated(this._isAuthenticated);
    }

}

export const userInst = new User();