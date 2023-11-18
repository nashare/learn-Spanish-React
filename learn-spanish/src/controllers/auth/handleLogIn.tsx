import { userInst } from "../../models/user";

interface LogInResult {
    errorMessage: string;
    authStatus: boolean;
}


export async function handleLogIn(email: string, password: string, 
    setErrorMessage: (error: string) => void, 
    setIsAuthenticated: (authState: boolean) => void) {
    const { errorMessage, authStatus }: LogInResult = await userInst.logIn(email, password);
    setErrorMessage(errorMessage);
    setIsAuthenticated(authStatus);
}