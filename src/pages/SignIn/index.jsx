
import { useState } from 'react';
import { Conteiner, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button/index';

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password });
    }

    return (
        <Conteiner>
            <Form>

                <h1>NoteMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

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
        </Conteiner>
    )
}