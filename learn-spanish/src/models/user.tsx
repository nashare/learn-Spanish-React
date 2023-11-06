import { UserClient } from "./UserClient";

export class User {
    private _isAuthenticated: boolean = false;
    private _categories: string[] = [];
    private _userId: number|null = null;

    get categories(): string [] {
        return this._categories;
    }
                                                                                                                                                                   
    get isAuthenticated(): boolean {
        return this._isAuthenticated;
    }
    async signUp(email: string, password: string,
        setErrorMessage: (error: string) => void,
        setIsAuthenticated: (authState: boolean) => void) {
        const result = await UserClient.post(email, password);
        if (Object.keys(result).length > 0) {
            this._categories = result.categories;
            this._userId = result.id;
            this._isAuthenticated = true;
            setErrorMessage('');
            setIsAuthenticated(this._isAuthenticated);
        } else {
            setErrorMessage('There was an error during the registration.');
        }
    }

    async logIn(email: string, password: string, 
        setErrorMessage: (error: string) => void,
        setIsAuthenticated: (authState: boolean) => void) {
        const result = await UserClient.get(email, password);
        if (result[0]) {
            this._categories = result[0].categories;
            this._userId = result[0].id;
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
        this._categories = [];
        this._userId = null;
        setIsAuthenticated(this._isAuthenticated);
    }

}

export const userInst = new User();