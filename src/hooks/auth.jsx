import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

const AuthContext = createContext({}); 

function AuthProvider({ children }){
    const [data, setData] = useState({});

    async function signIn({ email, password}) {

        try{
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({ user,token })

            localStorage.setItem("@notemovie:user", JSON.stringify(user));
            localStorage.setItem("@notemovie:token", token);

        } catch(error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar. ");
            }
        }
    }

    function signOut() {
        const token = localStorage.removeItem("@notemovie:token");
        const user = localStorage.removeItem("@notemovie:user");

        setData({})
    } 

    useEffect(() => {
        const token = localStorage.getItem("@notemovie:token");
        const user = localStorage.getItem("@notemovie:user");

        if (token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`;
            
            setData({
                token,
                user: JSON.parse(user)
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ 
                signIn, 
                signOut,
                user: data.user 
            }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };