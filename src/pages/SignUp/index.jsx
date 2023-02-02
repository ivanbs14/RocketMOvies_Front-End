import { Conteiner, Form, Background } from "./styles";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button/index';

export function SignUp() {
    
    return (
        <Conteiner>

            <Form>

                <h1>NoteMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <div>
                    <Input 
                        placeholder="Nome"
                        type="text"
                        icon={FiUser} 
                    />
                </div>
                
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

                <Button title="Cadastrar"/>

                <div className="link">
                        < FiArrowLeft />
                    <Link to="/">
                        Voltar para o login
                    </Link>
                </div>

            </Form>
                
            <Background />
        </Conteiner>
    )
}