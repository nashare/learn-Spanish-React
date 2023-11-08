import { UserClient } from "./UserClient";

interface AuthResult {
    errorMessage: string;
    authStatus: boolean;
}


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
    async signUp(email: string, password: string): Promise<AuthResult> {
        const result = await UserClient.post(email, password);
        let errorMessage = "";
        if (Object.keys(result).length > 0) {
            this._categories = result.categories;
            this._userId = result.id;
            this._isAuthenticated = true;
        } else {
            errorMessage = 'There was an error during the registration.';
        }
        return { errorMessage, authStatus: this._isAuthenticated }
    }

    async logIn(email: string, password: string): Promise<AuthResult> {
        const result = await UserClient.get(email, password);
        let errorMessage = "";
        if (result[0]) {
            this._categories = result[0].categories;
            this._userId = result[0].id;
            this._isAuthenticated = true;
        } else {
            errorMessage = 'Invalid login credentials. Please try again.';
        }
        return { errorMessage, authStatus: this._isAuthenticated }
    }

    async addCategory(category: string) {
        if (!this._categories.includes(category)) {
            this._categories.push(category)
        }
        const result = await UserClient.patch(this._categories, this._userId);
        this._categories = result.categories;
    }

    logOut(): boolean {
        this._isAuthenticated = false;
        this._categories = [];
        this._userId = null;
        return this._isAuthenticated;
    }

}

export const userInst = new User();