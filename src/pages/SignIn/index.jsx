
import { useState, useEffect } from 'react';
import { Conteiner, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button/index';
import { Loading } from '../../components/Loading/index';

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    /* method to check if the server is online */
    const [estaSincronizado, setEstaSincronizado] = useState(false);

    useEffect(() => {
        const verificarSincronizacao = async () => {
            try {
                
                const response = await fetch('https://notemovie-api.onrender.com/resp');
                const data = await response.json();
        
                const statusDeSincronizacao = data; 
                setEstaSincronizado(statusDeSincronizacao);

            } catch (error) {
                console.error('Erro ao verificar sincronização:', error);
                const interval = setInterval(verificarSincronizacao, 10000);
                return () => clearInterval(interval);
            }
        };

        verificarSincronizacao();
    }, []);

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password });
    }

    return (
        <Conteiner>
            <Form>

                <h1>NoteMovies</h1>
                <p>Acompanhe tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <div>
                    <Input
                        placeholder="E-mail"
                        type="text"
                        icon={FiMail} 
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <Input 
                        placeholder="Senha"
                        type="password"
                        icon={FiLock} 
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <Button title="Entrar" onClick={handleSignIn} />

                <Link to="/register">
                    Criar conta
                </Link>

            </Form>
                
            <Background />

            {
                estaSincronizado == false &&
                <Loading />
            }
        </Conteiner>
    )
}