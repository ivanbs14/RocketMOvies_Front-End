import {  useState } from "react";
import { Conteiner, Form, Background } from "./styles";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button/index';

export function SignUp() {
    const [ name, setName] = useState("");
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos!")
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso");
                navigate(-1);
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possivel cadastrar");
                }
            });
    }
    
    return (
        <Conteiner>

            <Form>

                <h1>NoteMovies</h1>
                <p>Acompanhe tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <div>
                    <Input 
                        placeholder="Nome"
                        type="text"
                        icon={FiUser} 
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                
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

                <Button title="Cadastrar" onClick={handleSignUp}/>

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