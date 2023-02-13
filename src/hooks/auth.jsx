import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

const AuthContext = createContext({}); 

function AuthProvider({ children }){
    const [data, setData] = useState({});

    async function signIn({ email, password}) {

        try{
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

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

    async function updateProfile({ user, avatarFile }) {
        try {

            if (avatarFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);

                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            }

            await api.put("/users", user);
            localStorage.setItem("@notemovie:user", JSON.stringify(user));

            setData({ user, token: data.token });
            alert("Perfil atualizado!");
            
        } catch(error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível atualizar o perfil. ");
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@notemovie:token");
        const user = localStorage.getItem("@notemovie:user");

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            
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
                updateProfile,
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