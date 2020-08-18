import React, { useEffect, useState } from "react";
import app from "../config/firebase";

export const AuthContext = React.createContext();

/**
* Authprovider manages the authentication staus of the application. 
* When user is signed in the app the user is set.
*/

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        app.authChange(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};