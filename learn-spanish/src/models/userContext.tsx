import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, userClass } from './userClass';

interface IUserContext {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
}

const UserContext = createContext<IUserContext>({
    user: userClass,
    setUser: () => { },
});

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User>(userClass);

    const contextValue: IUserContext = {
        user,
        setUser,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): IUserContext => {
    return useContext(UserContext);
};
