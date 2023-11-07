const API_BASE_URL = "https://fakeapi-server-847135678534.herokuapp.com";

export class UserClient {
    static async post(email: string, password:string) {
        try {
            const response = await fetch(`${API_BASE_URL}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    categories: []
                }),
            });
            return await response.json();
        } catch (error) {
            console.error('Error during sign up:', error);
            throw error; 
        }
    }

    static async get(email: string, password: string) {
        try {
            const response = await fetch(`${API_BASE_URL}/users/?email=${email}&password=${password}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return await response.json();
        } catch (error) {
            console.error('Error during log in:', error);
            throw error;
        }
    }

    static async patch(categories: string[]|null, userId: number|null) {
        try {
            const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    categories: categories,
                })
            });
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}
