import { Conteiner, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button/index';

export function SignIn() {

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
                    />
                </div>

                <div>
                    <Input 
                        placeholder="Senha"
                        type="password"
                        icon={FiLock} 
                    />
                </div>

                <Button title="Entrar"/>

                <Link to="/register">
                    Criar conta
                </Link>

            </Form>
                
            <Background />
        </Conteiner>
    )
}